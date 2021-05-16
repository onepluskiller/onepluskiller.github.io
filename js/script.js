document.querySelectorAll('.dock li').forEach(li => {
  li.addEventListener('click', e => {
    e.currentTarget.classList.add('loading')
  })

  li.addEventListener('mousemove', e => {
    let item = e.target
    let itemRect = item.getBoundingClientRect()
    let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width

    let prev = item.previousElementSibling || null
    let next = item.nextElementSibling || null

    let scale = 0.6

    resetScale()

    if (prev) {
      prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
    }

    item.style.setProperty('--scale', 1 + scale)

    if (next) {
      next.style.setProperty('--scale', 1 + scale * offset)
    }
  })
})

document.querySelector('.dock').addEventListener('mouseleave', e => {
  resetScale()
})

function resetScale() {
  document.querySelectorAll('.dock li').forEach(li => {
    li.style.setProperty('--scale', 1)
  })
}








window.onload=function()
{
  window.requestAnimationFrame(getDate)
}

function getDate()
{
  window.setTimeout(function(){
    window.requestAnimationFrame(getDate)
  },1000/2)
  let d = new Date();
  const year = d.getFullYear();  //获取年
  let month = d.getMonth() + 1;  //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
  const day = d.getDay();    //获取日
  let days = d.getDate(); //获取日期
  let hour = d.getHours();   //获取小时
  let minute = d.getMinutes();  //获取分钟
  let second = d.getSeconds();   //获取秒

  if(month<10) month="0"+month
  if(days<10) days="0"+days
  if(hour<10) hour="0"+hour
  if(minute<10) minute="0"+minute
  if(second<10) second="0"+second

  const week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const Tools = document.getElementById("menubar_right_time");
  // var data=year+" 年 "+month+" 月 "+days+" 日 "+week[day]+" "+hour+" : "+minute+" :"+second
  Tools.innerHTML=month + " 月 " + days + " 日 " + week[day] + " " + hour + " : " + minute + " :" + second
}