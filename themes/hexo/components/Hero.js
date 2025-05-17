const Hero = props => {
  const [typed, changeType] = useState()
  const { siteInfo } = props
  const { locale } = useGlobal()
  const scrollToWrapper = () => {
    window.scrollTo({ top: wrapperTop, behavior: 'smooth' })
  }

  const GREETING_WORDS = siteConfig('GREETING_WORDS').split(',')
  useEffect(() => {
    updateHeaderHeight()

    if (!typed && window && document.getElementById('typed')) {
      loadExternalResource('/js/typed.min.js', 'js').then(() => {
        if (window.Typed) {
          changeType(
            new window.Typed('#typed', {
              strings: GREETING_WORDS,
              typeSpeed: 200,
              backSpeed: 100,
              backDelay: 400,
              showCursor: true,
              smartBackspace: true
            })
          )
        }
      })
    }

    window.addEventListener('resize', updateHeaderHeight)
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  })

  function updateHeaderHeight() {
    requestAnimationFrame(() => {
      const wrapperElement = document.getElementById('wrapper')
      wrapperTop = wrapperElement?.offsetTop
    })
  }

  return (
    <header
      id='header'
      style={{ zIndex: 1 }}
      className='w-full h-screen relative bg-black'>

      {/* 视频背景层 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
      >
        <source src='/video/bg.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* 内容层 */}
      <div className='text-white absolute bottom-0 flex flex-col h-full items-center justify-center w-full'>
        {/* 站点标题 */}
        <div className='font-black text-4xl md:text-5xl shadow-text'>
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
        {/* 站点欢迎语 */}
        <div className='mt-2 h-12 items-center text-center font-medium shadow-text text-lg'>
          <span id='typed' />
        </div>

        {/* 首页导航大按钮 */}
        {siteConfig('HEXO_HOME_NAV_BUTTONS', null, CONFIG) && (
          <NavButtonGroup {...props} />
        )}

        {/* 滚动按钮 */}
        <div
          onClick={scrollToWrapper}
          className='z-10 cursor-pointer w-full text-center py-4 text-3xl absolute bottom-10 text-white'>
          <div className='opacity-70 animate-bounce text-xs'>
            {siteConfig('HEXO_SHOW_START_READING', null, CONFIG) &&
              locale.COMMON.START_READING}
          </div>
          <i className='opacity-70 animate-bounce fas fa-angle-down' />
        </div>
      </div>
    </header>
  )
}

export default Hero
