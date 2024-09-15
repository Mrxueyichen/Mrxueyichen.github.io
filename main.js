const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declares an array of image file names and declares alt text for each image file */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : 'Burning hearts',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */
for (const image of images) {
    //为images数组的每个图像创建一个新的<img>元素，并将其添加到thumbBar容器中
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    //为每个新创建的<img>元素添加一个点击事件监听器，当点击时，将显示的图像设置为点击的图像
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    //如果按钮的类是“dark”，则将按钮的类设置为“light”，将按钮的文本设置为“Lighten”，并将页面的背景颜色设置为半透明的黑色
    if (btnClass === 'dark') {          
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';    
    } else {
    //如果按钮的类是“light”，则将按钮的类设置为“dark”，将按钮的文本设置为“Darken”，并将页面的背景颜色设置为透明
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  