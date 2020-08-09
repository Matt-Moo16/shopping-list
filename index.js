function addAnItem() {
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      const itemInput = $('#shopping-list-entry');
      const itemName = itemInput.val();
      itemInput.val('');
      const newListItem = `
          <li>
          <span class="shopping-item">${itemName}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
      `
      $('ul').append(newListItem);
    });
  }
  
  function deleteButton() {
      $('ul').on('click', '.shopping-item-delete', function(event) { 
          $(this).closest('li').remove()
      });
  } 
  
  
  function checkButton() {
      $('ul').on('click', '.shopping-item-toggle', function(event) {
         $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked'); 
  
      });
  
  }
  function setUpEventHandlers() {
      checkButton()
      deleteButton()
      addAnItem()
  }
  $(setUpEventHandlers);
  
  