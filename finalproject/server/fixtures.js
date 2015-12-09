/**
 * Created by Michael on 10/29/2015.
 */

if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'John Cenary',
    url: 'http://images-cdn.9gag.com/photo/aBrXK8N_700b.jpg',
    rating: 5
  });

  Posts.insert({
    title: 'John Scene-a',
    url: 'https://pbs.twimg.com/profile_images/607547152735346689/dv9XQc7E_400x400.jpg',
    rating: 4
  });

  Posts.insert({
    title: 'Kanye East',
    url: 'http://i.redsnapperverytasty.com/graphics/wp-content/uploads/2012/08/kanye-west-east.jpg',
    rating: 5
  });
}