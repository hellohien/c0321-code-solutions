function handleClick(event) {
  console.log('message: ', 'button clicked');
  console.log('event ', event);
  console.log('event.target ', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('message: ', 'button hovered');
  console.log('event ', event);
  console.log('event.target ', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('message: ', 'button double-clicked');
  console.log('event ', event);
  console.log('target.event', event.target);
}

var $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
