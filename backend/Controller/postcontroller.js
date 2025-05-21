const Post = require('../Model/postmodel');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching post' });
  }
};

exports.createPost = async (req, res) => {
    try {
      const { title, content, author } = req.body;
      const newPost = new Post({ title, content, author });
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create post' });
    }
  };
