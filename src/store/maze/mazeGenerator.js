import Grid from "../../model/maze/Grid";

const input = [
  [
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    }
  ],
  [
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    }
  ],
  [
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    }
  ],
  [
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    }
  ],
  [
    {
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    }
  ],
  [
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    }
  ],
  [
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 1
    }
  ],
  [
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    }
  ],
  [
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    }
  ],
  [
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    }
  ],
  [
    {
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 1
    }
  ],
  [
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    }
  ],
  [
    {
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    }
  ],
  [
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    }
  ],
  [
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    }
  ],
  [
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    }
  ],
  [
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    }
  ],
  [
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    }
  ],
  [
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 1
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    },
    {
      "top": 1,
      "right": 0,
      "left": 0,
      "bottom": 0
    }
  ],
  [
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 1,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 0,
      "left": 1,
      "bottom": 0
    },
    {
      "top": 1,
      "right": 1,
      "left": 0,
      "bottom": 0
    },
    {
      "top": 0,
      "right": 0,
      "left": 1,
      "bottom": 1
    }
  ]
];
export const generateMaze = () => {
  const maze = new Grid({rows: input.length, columns: input[0].length});
  maze.eachCell((cell) => {
    const inputCell = input[cell.row][cell.column];
    if (inputCell.top === 1 && !cell.isEntry) {
      cell.link(cell.north);
    }
    if (inputCell.right === 1 && !cell.isEnd) {
      cell.link(cell.east);
    }
    if (inputCell.left === 1 && !cell.isEntry) {
      cell.link(cell.west);
    }
    if (inputCell.bottom === 1 && !cell.isEnd) {
      cell.link(cell.south);
    }
  });
  return maze;
};
