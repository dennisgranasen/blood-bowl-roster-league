<script lang="ts">
    import { onMount } from 'svelte';
    import { modalState } from '../../store/modal.store';

    import { showSpinner } from '../../store/showSpinner.store';
    import Button from '../uiComponents/button.svelte';

    import FootballSpinner from '../uiComponents/footballSpinner.svelte';
    import { getAuthModal } from './getAuthFormModule';

    $: emailV = '';
    let formTouched = false;
    let emailSent = false;
    let errorText = '';

    onMount(() => {
        document.getElementById('email')?.focus();
    });

    async function sendResetEmail(e: Event) {
        errorText = '';
        modalState.enableClose(false);
        showSpinner.set(true);
        e.preventDefault();
        try {
            await import('./firebaseAuth.service').then((service) =>
                service.resetPassword(emailV)
            );
            emailSent = true;
        } catch (error) {
            console.error({ error });
            errorText = 'Something went wrong';
        } finally {
            modalState.enableClose(true);
            showSpinner.set(false);
        }
    }
    function touchForm() {
        formTouched = true;
    }
    async function showLogin() {
        const component = await getAuthModal('login');
        modalState.set({
            ...$modalState,
            isOpen: true,
            component: component.default,
        });
    }
</script>

{#if $showSpinner}
    <FootballSpinner loadingText="Sending reset password email" />
{:else if emailSent}
    <div class="logged-in">
        <p>Email sent!</p>
        <Button
            clickFunction={async () => {
                await showLogin();
            }}>Login</Button
        >
    </div>
{:else}
    <form
        class="login-form"
        class:login-form--touched={formTouched}
        on:submit|preventDefault={sendResetEmail}
    >
        <h2>Reset your password</h2>
        <label for="email">Email:</label>
        <input
            type="email"
            name="email"
            id="email"
            placeholder="your email address"
            autocomplete="email"
            bind:value={emailV}
            required
        />
        <br />
        {#if errorText}
            <p class="error"><strong>{errorText}</strong></p>
        {/if}
        <button class="rounded-button" on:focus={touchForm}
            >Send Reset Email</button
        >
    </form>
{/if}

<!-- <button on:click={() => sendVerificationEmail()}>Send email</button> -->
<style lang="scss">
    .login-form {
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin: 0 auto;
        max-width: 400px;
        &--touched {
            input:invalid {
                border-color: var(--main-colour);
            }
        }
    }

    input {
        font-size: 16px;
        margin-bottom: 8px;
        height: 48px;
    }
    label {
        margin-bottom: 4px;
    }

    .error {
        color: var(--main-colour);
    }

    .logged-in {
        text-align: center;
        p {
            font-family: var(--display-font);
            font-size: 20px;
        }
    }
</style>
