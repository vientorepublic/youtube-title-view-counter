function updateTitle() {
  var videoID = '9yh6ixN_hMo'; // 영상 ID
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  var videoViewsCount = video.statistics.viewCount;
  var videoTitle = '이 영상의 조회수는 ' + videoViewsCount + ' 입니다.'; // 바뀔 제목
  video.snippet.title = videoTitle;
  try{
    YouTube.Videos.update(video, part);
  }catch(e){
  }
}
