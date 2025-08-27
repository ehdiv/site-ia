
document.querySelectorAll('.accordion').forEach(group=>{
  group.addEventListener('toggle', e => {
    if (!e.target.open) return;
    group.querySelectorAll('details').forEach(d => { if (d!==e.target) d.open=false; });
  }, true);
});
