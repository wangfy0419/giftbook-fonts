// GiftBoot Fonts - Chinese Font Library
// 礼启字体库

const path = require('path');

const fontsDir = path.join(__dirname, 'fonts');

module.exports = {
  fonts: {
    SongTi: path.join(fontsDir, 'SongTi.otf'),
    HeiTi: path.join(fontsDir, 'HeiTi.otf'),
    FangSong: path.join(fontsDir, 'FangSong.ttf'),
    Kaishu: path.join(fontsDir, 'Kaishu.ttf'),
    XingKai: path.join(fontsDir, 'XingKai.ttf'),
    XingShu: path.join(fontsDir, 'XingShu.ttf')
  },
  fontsDir: fontsDir
};
