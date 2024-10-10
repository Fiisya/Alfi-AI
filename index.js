document.getElementById('send-btn').addEventListener('click', async () => {
            const userInput = document.getElementById('user-input').value;
            if (!userInput.trim()) return;

            appendMessage('', userInput);
            document.getElementById('user-input').value = '';

            await fetchAIResponse(userInput);
        });

        function appendMessage(sender, message) {
            const chatBox = document.getElementById('chat-box');
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        async function fetchAIResponse(message) {
            try {
                const response = await fetch(`https://widipe.com/ai/c-ai?prompt=Aku%20adalah%20Alfi%20AI%20yang%20di%20rancang%20untuk%20membantu%20Anda%20dalam%20pertanyaan%20Anda%2C%20dan%20saya%20di%20ciptakan%20oleh%20seorang%20programmer%20yang%20bernama%20ErerexID%20Chx%20Yang%20handsome%20xixixi&text=${encodeURIComponent(message)}`);
                const data = await response.json();
                
                appendMessage('', data.result || 'No response received');
            } catch (error) {
                appendMessage('', 'Error Unable to connect to the API');
                console.error('API Error', error);
            }
        }

        document.getElementById('user-input').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('send-btn').click();
            }
        });
