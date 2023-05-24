window.addEventListener('DOMContentLoaded', function() {
    var stickyHeader = document.getElementById('linkContainer');
    var stickyHeaderTop = stickyHeader.offsetTop;
  
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > stickyHeaderTop) {
        stickyHeader.style.position = 'fixed';
        stickyHeader.style.top = '0px';
        document.getElementById('sticky').style.display = 'block';
      } else {
        stickyHeader.style.position = 'static';
        stickyHeader.style.top = '0px';
        document.getElementById('sticky').style.display = 'none';
      }
    });
  });
  
