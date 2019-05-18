$('#divRss').FeedEk({
    FeedUrl : 'https://habr.com/ru/rss/news/',
    MaxCount : 1,
    ShowDesc : true,
    ShowPubDate:true,
    DescCharacterLimit: 200,
    TitleLinkTarget:'_blank',
    DateFormat : 'MM/dd/yyyy',
    DateFormatLang : 'en'
  });