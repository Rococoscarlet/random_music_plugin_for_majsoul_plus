if (game) {
  (function() {
    var musiclist;
    view.AudioMgr.PlayMusic = (function() {
      return function(e, i, n) {
        var t;
        !(function(e) {
          (e[(e.none = 0)] = "none"),
            (e[(e.start = 1)] = "start"),
            (e[(e.during = 2)] = "during"),
            (e[(e.end = 3)] = "end");
        })(t || (t = {}));
        var ranmusic = e;
        if (!musiclist) {
          //请求歌单
          var request = new XMLHttpRequest();
          request.onreadystatechange = (function(e, i, n) {
            return function() {
              if (request.readyState === 4) {
                if (request.status === 200) {
                  musiclist = JSON.parse(request.responseText).data;
                  view.AudioMgr.PlayMusic(e, i, n);
                  return;
                } else {
                  return;
                }
              } else {
                return;
              }
            };
          })(e, i, n);
          request.open("GET", "/0/audio/my_music/musiclist.json");
          request.send();
        } else {
          if (
            musiclist[e.slice(e.indexOf("/") + 1)] &&
            Object.keys(musiclist[e.slice(e.indexOf("/") + 1)]).length != 0
          ) {
            var ran;
            ran = Math.floor(
              Math.random() * musiclist[e.slice(e.indexOf("/") + 1)].length
            );
            ranmusic =
              "my_music/" + musiclist[e.slice(e.indexOf("/") + 1)][ran];
          }
          void 0 === i && (i = 1e3),
            void 0 === n && (n = !1),
            (n || view.AudioMgr._current_music != ranmusic) &&
              ((view.AudioMgr._current_music = ranmusic),
              Laya.SoundManager.musicMuted ||
                //一曲播放完重新随机
                ((view.AudioMgr._music = Laya.SoundManager.playMusic(
                  "audio/" + ranmusic,
                  1,
                  {
                    run: (function(e, i, n) {
                      return function() {
                        view.AudioMgr._current_music = "";
                        view.AudioMgr.PlayMusic(e, i, n);
                      };
                    })(e, i, n)
                  }
                )),
                view.AudioMgr._music &&
                  ((view.AudioMgr._music.volume = 0),
                  (view.AudioMgr._music_state = t.start),
                  (view.AudioMgr._music_state_starttime = Laya.timer.currTimer),
                  (view.AudioMgr._music_state_lifetime = i))));
        }
      };
    })();
  })();
}
