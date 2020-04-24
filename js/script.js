////////////////////////////////////////////
////// SCROLL JS

function navScroll(event){
  let navId = event.target.id;

  if (navId === 'intro' ) {
    window.scroll({
      top: 400,
      behavior: 'smooth'
    });
  }
  if (navId === 'contact'){
    window.scrollTo(0,document.body.scrollHeight);
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
