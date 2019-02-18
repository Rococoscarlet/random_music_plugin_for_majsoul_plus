# 雀魂plus随机bgm插件

## 使用方法

本插件基于[雀魂Plus](https://github.com/MajsoulPlus/majsoul-plus)

请先下载雀魂Plus并解压

然后访问[Release](https://github.com/Rococoscarlet/random_music_plugin_for_majsoul_plus/releases)页面下载本插件

运行雀魂Plus后点击界面右上角的箭头按钮，加载本插件，随后加载曲包

在雀魂Plus中激活本插件和曲包模组，运行游戏

## 曲包制作方法

本项目中已包含一个示例曲包

在示例曲包下的files\0\audio\my_music中包含曲包所需的所有资源文件

其中musiclist.json为曲包配置文件，其余为使用的音乐文件

配置文件格式如下

```json
{
  "data": {
    "lobby.mp3": ["Phantom.mp3", "WillPower.mp3"],
    "game.mp3": ["Phantom.mp3", "WillPower.mp3"],
    "liqi1.mp3": ["FirewallDragon.mp3", "YuuseiTheme.mp3"],
    "liqi2.mp3": ["FirewallDragon.mp3", "YuuseiTheme.mp3"]
  }
}
```

其中"lobby.mp3"为大厅音乐，"game.mp3"为游戏音乐，"liqi1.mp3"与"liqi2.mp3"分别为现在游戏中的两首立直音乐。

其后的列表为打算替换成的音乐的列表。列表中的音乐将在对应场景随机播放。

建议替换后的音乐文件名只包含英语字母与数字，以避免可能的错误。

## 兼容

本插件原则上兼容@rin93@青龙圣者制作的音乐盒插件

但是需要对曲包配置进行一定修改。

在@rin93@青龙圣者制作的音乐盒插件中，游戏内音乐修改为了0.mp3，1.mp3，r1.mp3，e1.mp3等

需要对这些音乐也扩展为随机播放的话，则将曲包配置文件对应修改为:

```json
{
  "data": {
    "lobby.mp3": ["Phantom.mp3", "WillPower.mp3"],
    "0.mp3": ["Phantom.mp3", "WillPower.mp3"],
    "r1.mp3": ["FirewallDragon.mp3", "YuuseiTheme.mp3"],
    "e1.mp3": ["FirewallDragon.mp3", "YuuseiTheme.mp3"]
  }
}
```

即只需增加对应条目，即可将对应曲目修改为随机播放其后的曲目列表。

本插件暂时不能保证对其他音乐插件的兼容性。

## 开源协议

本项目以AGPL-3.0协议发布

注：项目中所有图片与音乐文件不包括在开源协议内。
