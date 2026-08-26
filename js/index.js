const mouseCursor = document.querySelector('.cursor');

if (mouseCursor) {
    document.addEventListener('mousemove', (e) => {
        mouseCursor.style.top = e.clientY + 'px';
        mouseCursor.style.left = e.clientX + 'px';
        mouseCursor.classList.add('is-visible');
    });

    document.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('is-visible');
    });

    document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow');
            link.classList.remove('hovered-link');
        });
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-grow');
            link.classList.add('hovered-link');
        });
    });
}

const copyAiPromptButton = document.querySelector('#copyAiPrompt');
const aiPromptText = document.querySelector('#aiPromptText');
const aiPromptStatus = document.querySelector('#aiPromptStatus');

if (copyAiPromptButton && aiPromptText && aiPromptStatus) {
    const buttonLabel = copyAiPromptButton.querySelector('span');
    let resetTimer;

    const copyWithFallback = () => {
        aiPromptText.focus();
        aiPromptText.select();
        aiPromptText.setSelectionRange(0, aiPromptText.value.length);
        const copied = document.execCommand('copy');
        window.getSelection()?.removeAllRanges();
        return copied;
    };

    copyAiPromptButton.addEventListener('click', async () => {
        let copied = false;

        try {
            await navigator.clipboard.writeText(aiPromptText.value.trim());
            copied = true;
        } catch (error) {
            copied = copyWithFallback();
        }

        window.clearTimeout(resetTimer);

        if (copied) {
            copyAiPromptButton.classList.add('is-copied');
            buttonLabel.textContent = 'Copied';
            aiPromptStatus.textContent = 'Prompt copied—paste it into your AI of choice.';
            resetTimer = window.setTimeout(() => {
                copyAiPromptButton.classList.remove('is-copied');
                buttonLabel.textContent = 'Copy prompt';
                aiPromptStatus.textContent = '';
            }, 4000);
        } else {
            aiPromptStatus.textContent = 'Copy failed. Please try again in another browser.';
        }
    });
}
