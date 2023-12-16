/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'HiCar使用条件',
      items: [
        'check/phone',
        'check/car',
      ],
    },
    'version',
    {
      type: 'category',
      label: 'HiCar使用方法 ★',
      items: [
        {
          type: 'category',
          label: '连接',
          items: [
            'guides/connect/wireless',
            'guides/connect/wired',
            'guides/connect/auto',
            'guides/connect/disconnect',
            
          ],
        },
        {
          type: 'category',
          label: '界面',
          items: [
            'guides/ui/desktop',
            'guides/ui/card',
            'guides/ui/wallpaper',
            'guides/ui/dock',
            'guides/ui/display-mode',
            'guides/ui/screenshot',
            'guides/ui/back-to-car',
            
          ],
        },
        {
          type: 'category',
          label: '应用',
          items: [
            'guides/app/obtain',
            'guides/app/restrictions',
            'guides/app/ajust-order',
          ],
        },
        {
          type: 'category',
          label: '语音',
          items: [
            'guides/voice/wake-up',
            'guides/voice/timbre',
            'guides/voice/seen-and-said',
            'guides/voice/voice-enhance',
            'guides/voice/commands',
          ],
        },
        {
          type: 'category',
          label: '功能',
          items: [
            'guides/function/set-home-and-work-address',
            'guides/function/shake-navigation',
            'guides/function/mobile-linkage-navigation',
            'guides/function/switch-audio-device',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'HiCar设备猎奇',
      items: [
        'devices/aromatherapy-hicar',
        'devices/vision-glass-hicar',
      ],
    },
    {
      type: 'category',
      label: 'HiCar驾驶模式',
      items: [
        'dmode/driving-mode',
        'dmode/enter-driving-mode',
        'dmode/function-and-operation',
        'dmode/work-with-hicar',
        'dmode/exit-driving-mode',
      ],
    },
    //{
      //type: 'category',
      //label: 'HiCar技术进阶',
      //items: [
      //  'advanced/architecture',
      //  'advanced/app-access',
      //  'advanced/device-access',
      //  'advanced/one-more-thing',
      //],
    //},
    'vehicle',
    {
      type: 'category',
      label: 'HiCar模拟器',
      items: [
        'simulator/box-hicar-pad',
      ],
    },
    'update',
  ],

  faqSidebar: [
    'faq/intro',
  ],
  
};

module.exports = sidebars;
