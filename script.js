<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script>
        // Placeholder functions for other buttons
        function saveVCard() {
            alert('VCard save functionality not implemented yet.');
        }

        function shareCard() {
            alert('Card sharing functionality not implemented yet.');
        }

        // --- NEW CODE FOR DOWNLOAD FUNCTIONALITY ---
        function downloadCardImage() {
            const card = document.querySelector('.card-container');
            const filename = 'Sofonias_Genanaw_Card.png';

            html2canvas(card).then(canvas => {
                const image = canvas.toDataURL('image/png', 1.0);

                const link = document.createElement('a');
                link.download = filename;
                link.href = image;

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }

        // Attach the download function to the button's click event
        document.getElementById('downloadButton').addEventListener('click', downloadCardImage);
    </script>