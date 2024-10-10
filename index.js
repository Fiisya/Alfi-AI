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
            messageElement.innerHTML = `<strong>${sender}</strong> ${message}`;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        async function fetchAIResponse(message) {
            try {
                const response = await fetch(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=Kamu Adalah "Ken - MD", Kamu Di Lengkapi Dengan Kemampuan Komunikasi Yang Sangat - Sangat Baik, Karakter Kamu Baik Dan Ramah, Kamu Juga Sangat Pintar Dalam Melakukan Dan Memberi Saran, Dan Juga Kamu Mempunyai Owner Bernama "alfi", Ubah Bahasa Mu Menjadi Bahasa Gaul, Ubah Hai ke "Hallo Tod" Dan Kak "Tod&query=${encodeURIComponent(message)}`);
                const data = await response.json();
                
                appendMessage('🤖', data.result || 'No response received');
            } catch (error) {
                appendMessage('🤖', 'Error: Unable to connect to the API');
                console.error('API Error:', error);
            }
        }

        document.getElementById('user-input').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('send-btn').click();
            }
        });
