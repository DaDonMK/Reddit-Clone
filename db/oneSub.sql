-- select * from sub_posts where subreddit_id = $1;

select subreddit_id, post_title, post_author, post_content, post_upvotes, post_downvotes 
from reddit_subs 
join sub_posts 
on reddit_subs.id = sub_posts.subreddit_id
where subreddit_id = $1
