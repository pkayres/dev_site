////////////////////////////////////////////
////// SCROLL JS

function navScroll(event){
  let navId = event.target.id;
  let windowSize = window.innerHeight;
  console.log(windowSize);
  if (navId === 'intro' ) {
    window.scroll({
      top: 400,
      behavior: 'smooth'
    });
  }

  if (navId === 'contact'){
    window.scroll({
      top: 1000,
      behavior: 'smooth'
    });
  }
}

function navProjects(event){
  let proId = event.target.id;
  let windowWidth = window.innerWidth;
  console.log(windowWidth)
  if (proId === 'projects' && windowWidth <= 1280){
    window.scroll({
      top: 850,
      behavior: 'smooth'
    })

  } else {
    window.scroll({
      top: 790,
      behavior: 'smooth'
    });
  }
}
