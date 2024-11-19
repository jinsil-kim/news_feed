import Feed from './Feed';

const Home = () => {
  const posts = [
    {
      id: 1,
      user_img:
        'https://i.namu.wiki/i/7GmNjfJX-qYVLsmifPtiMkeaopawU9R4ccPVgx4aHs3VfYoMR_f8xcnxDR3cDo4WADgwCsxDJfrCsVPbROd70Q.webp', // 프로필 이미지
      user_name: 'Alice Johnson', // 사용자 이름
      feed_img:
        'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202410/03/cc929604-8e12-47c4-a0db-a948d7053e49.jpg', // 피드 이미지
      content:
        '피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1피드 내용 1',
      tag: "수영" // 태그
    },

    {
      id: 2,
      user_img: 'https://c.files.bbci.co.uk/DCE1/production/_104454565_mary-mcgowan_caught-in-the-act_00001294.jpg',
      user_name: 'Bob Smith',
      feed_img: 'https://cornerstonephysio.com/wp-content/uploads/2020/04/Swimming-Teen-Boy-1200x800-2.jpeg',
      content: '피드 내용 2',
      tag: 'swim'
    },
    {
      id: 3,
      user_img: 'https://animals.or.kr/api/files/thumbnails/1014-584ab2bc-b520-44c0-a18b-b7b48ce02174.jpg',
      user_name: 'Charlie Brown',
      feed_img: 'https://cdn.news.hidoc.co.kr/news/photo/201807/17281_41024_0455.jpg',
      content: '피드 내용 3',
      tag: 'yoga'
    }
  ];

  return (
    <div>
      {posts.map((post) => (
        <Feed key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
