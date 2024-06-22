import { useEffect } from 'react';

function UseDragScroll(ref) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleResize = () => {
      if (window.innerWidth >= 1248) {
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mouseup', handleMouseUp);
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
      } else {
        element.addEventListener('mousedown', handleMouseDown);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mouseup', handleMouseUp);
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('touchstart', handleTouchStart);
        element.addEventListener('touchmove', handleTouchMove);
        element.addEventListener('touchend', handleTouchEnd);
      }
    };

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      element.classList.add('active');
      startX = e.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    };

    const handleMouseLeave = () => {
      if (isDown) adjustScrollPosition();
      isDown = false;
      element.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      element.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 2; // 스크롤 속도를 조정할 수 있습니다.
      element.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
      isDown = true;
      element.classList.add('active');
      startX = e.touches[0].pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - element.offsetLeft;
      const walk = (x - startX) * 2; // 스크롤 속도를 조정할 수 있습니다.
      element.scrollLeft = scrollLeft - walk;
    };

    const adjustScrollPosition = () => {
      const cardWidth = element.children[0].offsetWidth + 20; // 100
      const scrollLeft = element.scrollLeft; // 120
      const nearestCardIndex = Math.round(scrollLeft / cardWidth); // 1.2 -> 첫번째 요소 -> 1
      const newScrollLeft = nearestCardIndex * cardWidth; // 1*100
      element.scrollLeft = newScrollLeft;
    };

    const handleTouchEnd = () => {
      isDown = false;
      element.classList.remove('active');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseup', handleMouseUp);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);
}

export default UseDragScroll;
