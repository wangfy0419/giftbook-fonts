# GiftBoot Fonts | 礼启字体库

[English](#english) | [中文](#中文)

---

## 中文

### 项目简介

GiftBoot Fonts 是一个开源中文字体库项目，包含多种常用中文字体，方便开发者在项目中使用。

### 字体列表

本项目包含以下字体：

- **宋体 (SongTi.otf)** - 传统印刷体，适合正文阅读
- **黑体 (HeiTi.otf)** - 无衬线字体，现代简洁
- **仿宋 (FangSong.ttf)** - 模仿宋版书籍的字体
- **楷书 (Kaishu.ttf)** - 工整规范的书法字体
- **行楷 (XingKai.ttf)** - 行书与楷书的结合
- **行书 (XingShu.ttf)** - 流畅的书法字体

### 安装使用

#### 方式一：直接下载

从 `fonts` 目录下载所需的字体文件，安装到系统或在项目中引用。

#### 方式二：通过 npm 安装

```bash
npm install giftboot-fonts
```

#### 方式三：通过 Git 克隆

```bash
git clone https://github.com/wangfy0419/giftboot-fonts.git
```

### 在项目中使用

#### Web 项目

```css
@font-face {
  font-family: 'SongTi';
  src: url('path/to/fonts/SongTi.otf') format('opentype');
}

body {
  font-family: 'SongTi', serif;
}
```

#### React/Vue 项目

```javascript
import './fonts/SongTi.otf';
```

### 许可证

本项目采用 MIT 许可证，详见 [LICENSE](LICENSE) 文件。

### 贡献

欢迎提交 Issue 和 Pull Request！

---

## English

### Introduction

GiftBoot Fonts is an open-source Chinese font library project that provides various commonly used Chinese fonts for developers.

### Font List

This project includes the following fonts:

- **SongTi (宋体, SongTi.otf)** - Traditional serif font, suitable for body text
- **HeiTi (黑体, HeiTi.otf)** - Sans-serif font, modern and clean
- **FangSong (仿宋, FangSong.ttf)** - Font imitating Song Dynasty books
- **Kaishu (楷书, Kaishu.ttf)** - Standard script calligraphy font
- **XingKai (行楷, XingKai.ttf)** - Combination of running and regular script
- **XingShu (行书, XingShu.ttf)** - Running script calligraphy font

### Installation

#### Method 1: Direct Download

Download the required font files from the `fonts` directory and install them to your system or reference them in your project.

#### Method 2: Install via npm

```bash
npm install giftboot-fonts
```

#### Method 3: Clone via Git

```bash
git clone https://github.com/wangfy0419/giftboot-fonts.git
```

### Usage in Projects

#### Web Projects

```css
@font-face {
  font-family: 'SongTi';
  src: url('path/to/fonts/SongTi.otf') format('opentype');
}

body {
  font-family: 'SongTi', serif;
}
```

#### React/Vue Projects

```javascript
import './fonts/SongTi.otf';
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Contributing

Issues and Pull Requests are welcome!

---

### Repository

- GitHub: [https://github.com/wangfy0419/giftboot-fonts](https://github.com/wangfy0419/giftboot-fonts)

### Version

Current Version: 1.0.0
