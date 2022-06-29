export const FadeInMotion = (custom: number = 0) => ({
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -10
  }
});

export const FadeInMotionOpacity = (custom: number = 0) => ({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: custom * 0.1
    }
  },
  exit: {
    opacity: 0
  }
});

export const ChatUp = (custom: number = 0) => ({
  hidden: {
    opacity: 0,
    y: "100%"
  },
  visible: {
    opacity: 1,
    transition: {
      delay: custom * 0.1
    },
    y: "0"
  },
  exit: {
    opacity: 0,
    y: "100%"
  }
});
