// When click on the li it will delete the li and when click on the add dButton, it will delete the li
< !DOCTYPE html >
    <html>
        <body>

            <ul id="itemList">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <button id="addItemButton">Add New Item</button>


            <script>
                const itemList = document.getElementById('itemList');
                const addItemButton = document.getElementById('addItemButton');

                // Add event listener to "Add New Item" button
                addItemButton.addEventListener('click', function() {
                const newListItem = document.createElement('li');
                newListItem.textContent = 'New Item';
                itemList.appendChild(newListItem);
                });

                // Add event listener to the list to handle item removal
                itemList.addEventListener('click', function(event) {
                if (event.target.tagName === 'LI') {
                    console.log('Clicked on:', event.target.textContent);
                event.target.parentNode.removeChild(event.target);
            }
        });

            </script>

        </body>
    </html>