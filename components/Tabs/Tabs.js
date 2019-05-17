
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    /* After dataset is .tab.  The reason that it's .tab is because the
      reference item is data-tab="#".  Tab references the word after data-.
      If it were data-flank, we'd say this.element.dataset.flank. If using
      dataset., you must put data- in the HTML.  What comes after data- is
      up to you.
    */
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    /* To match up the data tab to the data element, the data-tab="#" for
      the tab and the content must match in your HTML.  For example, data-tab="1"
      must match in the tab HTML and the content HTML to be matched up in JS. Tab 1
      will match up with content 1 if they both contain data-tab="1".
    */
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select())
  };

  select() {
    // Get all of the elements with the tabs-link class
    /* For the red border to show white when selected and red
      when not selected, you must use document.querySelectorAll.
      If using this.element.querySelectorAll, the tabs will state
      white even while clicked off.  Stay consistent and use
      document.querySelectorAll for both the const links and the
      const items in the select() method below.  
    */
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    /* This takes the NodeList you made above, turns it into an array,
      and then removes all of the CSS formatting.
    */
    links.forEach(element => element.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    /* This adds the called CSS formatting each time you
      toggle on the tab.
    */
    this.element.classList.toggle('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    /* This calls the method on the new item that you created.
    */
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(element => element.classList.remove('tabs-item-selected'))
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.toggle('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.tabs-link')
links.forEach(tabLink => new TabLink(tabLink));