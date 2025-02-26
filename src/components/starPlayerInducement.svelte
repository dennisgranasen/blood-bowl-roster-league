<script lang="ts">
    import { starPlayers } from '../data/starPlayer.data';
    import { currentTeam } from '../store/currentTeam.store';
    import { filterStarPlayers } from '../helpers/starPlayerFilter';
    import { roster } from '../store/teamRoster.store';
    import MaterialButton from './uiComponents/materialButton.svelte';
    import type { Team } from '../models/team.model';
    import { rosterSpecialRules } from '../store/rosterSpecialRules.store';
    import { formatNumberInThousands } from '../helpers/formatTotalToThousands';
    import type { StarPlayer } from '../models/player.model';

    let selectedId: number;

    $: filteredStarPlayers = filterStarPlayers(
        starPlayers,
        $rosterSpecialRules,
        $roster.players.map((x) => x.player.id)
    )
        .map((x, _, a) => {
            let displayName = x.position;
            if (x?.twoForOne) {
                const other = a.find((p) => p.id === x?.twoForOne);
                if (other.id < x.id) {
                    return { ...x, displayName: 'ignoreThis' };
                }
                displayName = x.position + ' & ' + other.position;
            }
            return { ...x, displayName };
        })
        .filter((x) => x.displayName !== 'ignoreThis');

    let currentStarPlayerAmount: number;
    $: currentStarPlayerAmount = $roster.players
        .filter((x) => x.starPlayer && !x.deleted)
        .filter((x, _, a) => {
            const other = a.find(
                (p) => p.player.id === (x.player as StarPlayer)?.twoForOne
            );
            if (other?.player?.id < x.player.id) {
                return false;
            }
            return true;
        }).length;

    const getSelected = (id) => {
        return starPlayers.starPlayers.find((x) => x.id === id);
    };

    const addStarPlayer = () => {
        const addTwo = getSelected(selectedId).twoForOne;

        roster.addPlayer({
            player: getSelected(selectedId),
            playerName: getSelected(selectedId).position,
            starPlayer: true,
        });

        if (addTwo) {
            const twoForPlayer = starPlayers.starPlayers.find(
                (x) => x.id === getSelected(selectedId).twoForOne
            );
            roster.addPlayer({
                player: twoForPlayer,
                playerName: twoForPlayer.position,
                starPlayer: true,
            });
        }
        setTimeout(() => {
            // This is a hack until I work out why the binding isn't updated when the options array change
            selectedId = filteredStarPlayers?.[0]?.id;
        }, 2);
    };
</script>

<table class="no-print star-player">
    <thead>
        <tr><td colspan="4">Star Player</td></tr>
    </thead>
    <tr>
        <td class="left-align">
            {#if filteredStarPlayers.length > 0}
                <select
                    aria-label="star player name"
                    class="star-player-select"
                    data-cy="star-player-select"
                    bind:value={selectedId}
                >
                    {#each filteredStarPlayers as star (star.id)}
                        <option value={star.id}>{star.displayName}</option>
                    {/each}
                </select>
            {/if}
        </td>
        <td>{currentStarPlayerAmount} / 2</td>
        <td>{formatNumberInThousands(getSelected(selectedId)?.cost) || 0}</td>
        <td>
            {#if filteredStarPlayers.length > 0 && currentStarPlayerAmount < 2}
                <div class="add-star">
                    <MaterialButton
                        hoverText="Add star player"
                        symbol="add_circle"
                        clickFunction={addStarPlayer}
                        cyData="add-star-player"
                    />
                </div>
            {/if}
        </td>
    </tr>
</table>

<style lang="scss">
    .star-player {
        margin-block-end: 1em;
        margin-right: 1em;
        tr {
            height: 44px;
        }
    }
    .left-align {
        text-align: left;
    }
    .add-star {
        display: flex;
    }
    @media screen and (max-width: 783px) {
        .star-player {
            margin-right: 0;
            width: 100%;
        }
    }
</style>
