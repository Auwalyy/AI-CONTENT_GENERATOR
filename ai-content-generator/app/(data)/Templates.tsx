export default [
    {
      name: 'YouTube SEO',
      desc: 'An AI tool that generates optimized YouTube titles, descriptions, and tags for better search rankings.',
      category: "YouTube",
      icon: 'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
      atPrompt: 'Generate 5 optimized YouTube titles, descriptions, and tags based on your video topic.',
      slug: 'youtube-seo',
      form: [
        {
          label: "Enter your video topic",
          field: 'input',
          name: 'topic',
          required: true
        },
        {
          label: "Enter keywords (optional)",
          field: 'textarea',
          name: 'keywords',
        }
      ]
    },
    {
      name: 'Content Marketing',
      desc: 'An AI tool that helps you create engaging content marketing strategies and ideas.',
      category: "Marketing",
      icon: 'https://cdn-icons-png.flaticon.com/128/4520/4520915.png',
      atPrompt: 'Generate 5 content marketing ideas based on your niche and target audience.',
      slug: 'content-marketing',
      form: [
        {
          label: "Enter your niche",
          field: 'input',
          name: 'niche',
          required: true
        },
        {
          label: "Enter target audience (optional)",
          field: 'textarea',
          name: 'audience',
        }
      ]
    },
    {
      name: 'Social Media Captions',
      desc: 'An AI tool that generates catchy captions for your social media posts.',
      category: "Social Media",
      icon: 'https://cdn-icons-png.flaticon.com/128/4104/4104914.png',
      atPrompt: 'Generate 5 engaging captions for your social media posts based on the given topic.',
      slug: 'social-media-captions',
      form: [
        {
          label: "Enter your post topic",
          field: 'input',
          name: 'topic',
          required: true
        },
        {
          label: "Enter hashtags (optional)",
          field: 'textarea',
          name: 'hashtags',
        }
      ]
    },
    {
      name: 'Email Subject Lines',
      desc: 'An AI tool that generates compelling email subject lines to improve open rates.',
      category: "Email Marketing",
      icon: 'https://cdn-icons-png.flaticon.com/128/542/542638.png',
      atPrompt: 'Generate 5 email subject lines based on your email content.',
      slug: 'email-subject-lines',
      form: [
        {
          label: "Enter your email topic",
          field: 'input',
          name: 'topic',
          required: true
        },
        {
          label: "Enter key points (optional)",
          field: 'textarea',
          name: 'keyPoints',
        }
      ]
    },
    {
      name: 'Blog Topic Ideas',
      desc: 'An AI tool that generates unique blog topic ideas based on your niche.',
      category: "Blog",
      icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593510.png',
      atPrompt: 'Generate 5 blog topic ideas based on your niche.',
      slug: 'blog-topic-ideas',
      form: [
        {
          label: "Enter your blog niche",
          field: 'input',
          name: 'niche',
          required: true
        },
        {
          label: "Enter keywords (optional)",
          field: 'textarea',
          name: 'keywords',
        }
      ]
    },
    {
      name: 'Ad Copy Generator',
      desc: 'An AI tool that generates persuasive ad copies for your marketing campaigns.',
      category: "Advertising",
      icon: 'https://cdn-icons-png.flaticon.com/128/5358/5358485.png',
      atPrompt: 'Generate 5 ad copies based on your product and target audience.',
      slug: 'ad-copy-generator',
      form: [
        {
          label: "Enter your product name",
          field: 'input',
          name: 'product',
          required: true
        },
        {
          label: "Enter target audience (optional)",
          field: 'textarea',
          name: 'audience',
        }
      ]
    },
    {
      name: 'Product Descriptions',
      desc: 'An AI tool that generates compelling product descriptions for your e-commerce store.',
      category: "E-commerce",
      icon: 'https://cdn-icons-png.flaticon.com/128/10951/10951869.png',
      atPrompt: 'Generate 5 product descriptions based on your product details.',
      slug: 'product-descriptions',
      form: [
        {
          label: "Enter your product name",
          field: 'input',
          name: 'product',
          required: true
        },
        {
          label: "Enter key features (optional)",
          field: 'textarea',
          name: 'features',
        }
      ]
    }
  ];