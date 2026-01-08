# Sanity CMS Setup Guide for iTOP Services

This guide will help you set up Sanity CMS so the shop owner can edit **all** website content without touching code.

## Table of Contents
1. [Quick Start](#quick-start)
2. [All Content Schemas](#all-content-schemas)
3. [Content Types Overview](#content-types-overview)
4. [Shop Owner Guide](#shop-owner-guide)

---

## Quick Start

### Step 1: Create a Sanity Account & Project

1. Go to [https://www.sanity.io/](https://www.sanity.io/)
2. Click "Get Started" and sign up (Google/GitHub login available)
3. Click "Create new project"
4. Name it: `itop-services-cms`
5. Select "Start with a clean project"
6. Choose the **Free** plan (generous limits for small businesses)

### Step 2: Get Your Project Credentials

After creating the project:

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Note down:
   - **Project ID** (looks like: `abc123xy`)
   - **Dataset** (usually: `production`)

### Step 3: Add Credentials to Your Website

Create a `.env` file in your project root:

```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

### Step 4: Set Up Sanity Studio

```bash
# In a separate folder (not inside your React project)
npm create sanity@latest

# Follow prompts:
# - Use existing project: Yes
# - Select your project
# - Dataset: production
# - Template: Clean project
```

---

## All Content Schemas

Copy these schema files into your Sanity Studio's `schemas` folder.

---

### Home Page Schemas

#### `schemas/homeHero.ts`
```typescript
export default {
  name: 'homeHero',
  title: 'Home Page Hero',
  type: 'document',
  fields: [
    { name: 'title', title: 'Main Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' }
        ]
      }]
    }
  ]
}
```

#### `schemas/homeServices.ts`
```typescript
export default {
  name: 'homeServices',
  title: 'Home Services Section',
  type: 'document',
  fields: [
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'path', title: 'Link Path', type: 'string', description: 'e.g., /printers, /cctv' },
          { name: 'colorClass', title: 'Color Class', type: 'string', description: 'e.g., bg-blue-500' }
        ]
      }]
    }
  ]
}
```

#### `schemas/about.ts`
```typescript
export default {
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Section Title', type: 'string' },
    { name: 'description', title: 'Main Description', type: 'text' },
    { name: 'secondaryDescription', title: 'Secondary Description', type: 'text' },
    {
      name: 'achievements',
      title: 'Achievement Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon Name', type: 'string', description: 'Use: Users, Clock, Award, CheckCircle' },
          { name: 'number', title: 'Number/Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'description', title: 'Description', type: 'string' }
        ]
      }]
    },
    { name: 'whyChooseTitle', title: 'Why Choose Us Title', type: 'string' },
    { name: 'features', title: 'Features List', type: 'array', of: [{ type: 'string' }] },
    { name: 'commitmentTitle', title: 'Commitment Title', type: 'string' },
    { name: 'commitmentDescription', title: 'Commitment Description', type: 'text' },
    { name: 'secondaryCommitmentDescription', title: 'Secondary Commitment', type: 'text' }
  ]
}
```

#### `schemas/contact.ts`
```typescript
export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    { name: 'title', title: 'Section Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle/Badge', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'phones', title: 'Phone Numbers', type: 'array', of: [{ type: 'string' }] },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'whatsappNumber', title: 'WhatsApp Number (without +)', type: 'string', description: 'e.g., 919849655559' },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'line1', title: 'Address Line 1', type: 'string' },
        { name: 'line2', title: 'Address Line 2', type: 'string' },
        { name: 'city', title: 'City & PIN', type: 'string' }
      ]
    },
    {
      name: 'serviceHours',
      title: 'Service Hours',
      type: 'object',
      fields: [
        { name: 'weekdays', title: 'Monday-Saturday', type: 'string' },
        { name: 'weekends', title: 'Sunday', type: 'string' },
        { name: 'emergency', title: 'Emergency', type: 'string' }
      ]
    },
    { name: 'serviceAreas', title: 'Service Areas', type: 'array', of: [{ type: 'string' }] },
    { name: 'ctaTitle', title: 'CTA Title', type: 'string' },
    { name: 'ctaDescription', title: 'CTA Description', type: 'text' }
  ]
}
```

#### `schemas/blogsSection.ts`
```typescript
export default {
  name: 'blogsSection',
  title: 'Blogs Section',
  type: 'document',
  fields: [
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    { name: 'viewAllButtonText', title: 'View All Button Text', type: 'string' }
  ]
}
```

#### `schemas/blog.ts`
```typescript
export default {
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    { name: 'id', title: 'ID', type: 'number' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'date', title: 'Date', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' }
  ]
}
```

---

### Layout Schemas

#### `schemas/footer.ts`
```typescript
export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    { name: 'companyName', title: 'Company Name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'sectionId', title: 'Section ID', type: 'string' }
        ]
      }]
    },
    {
      name: 'serviceLinks',
      title: 'Service Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'path', title: 'Path', type: 'string' }
        ]
      }]
    },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'address', title: 'Address', type: 'string' }
      ]
    },
    { name: 'copyright', title: 'Copyright Text', type: 'string' },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'whatsapp', title: 'WhatsApp URL', type: 'url' }
      ]
    }
  ]
}
```

---

### Service Page Schemas (Printers, CCTV, Door Locks, Fire Alarms)

These schemas are **shared across all service pages**. The `page` field determines which service the content belongs to.

#### `schemas/pageHero.ts`
```typescript
export default {
  name: 'pageHero',
  title: 'Service Page Hero',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Printers', value: 'printers' },
          { title: 'CCTV', value: 'cctv' },
          { title: 'Door Locks', value: 'doorlocks' },
          { title: 'Fire Alarms', value: 'firealarms' }
        ]
      }
    },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'primaryButtonText', title: 'Primary Button Text', type: 'string' },
    { name: 'secondaryButtonText', title: 'Secondary Button Text', type: 'string' }
  ]
}
```

#### `schemas/pageServices.ts`
```typescript
export default {
  name: 'pageServices',
  title: 'Service Page - Services Section',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Printers', value: 'printers' },
          { title: 'CCTV', value: 'cctv' },
          { title: 'Door Locks', value: 'doorlocks' },
          { title: 'Fire Alarms', value: 'firealarms' }
        ]
      }
    },
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name (e.g., Printer, Settings, Shield)' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }
        ]
      }]
    },
    {
      name: 'repairSection',
      title: 'Repair Section (Optional)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon Name', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' }
            ]
          }]
        }
      ]
    }
  ]
}
```

#### `schemas/pageTypes.ts`
```typescript
export default {
  name: 'pageTypes',
  title: 'Service Page - Types Section',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Printers', value: 'printers' },
          { title: 'CCTV', value: 'cctv' },
          { title: 'Door Locks', value: 'doorlocks' },
          { title: 'Fire Alarms', value: 'firealarms' }
        ]
      }
    },
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    {
      name: 'types',
      title: 'Types',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'image', title: 'Image', type: 'image' },
          { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
          { name: 'bestFor', title: 'Best For', type: 'string' }
        ]
      }]
    }
  ]
}
```

#### `schemas/pageBrands.ts`
```typescript
export default {
  name: 'pageBrands',
  title: 'Service Page - Brands Section',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Printers', value: 'printers' },
          { title: 'CCTV', value: 'cctv' },
          { title: 'Door Locks', value: 'doorlocks' },
          { title: 'Fire Alarms', value: 'firealarms' }
        ]
      }
    },
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    {
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Brand Name', type: 'string' },
          { name: 'logo', title: 'Logo', type: 'image' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'specialties', title: 'Specialties', type: 'array', of: [{ type: 'string' }] }
        ]
      }]
    },
    { name: 'ctaTitle', title: 'CTA Title', type: 'string' },
    { name: 'ctaDescription', title: 'CTA Description', type: 'text' },
    { name: 'ctaButtonText', title: 'CTA Button Text', type: 'string' }
  ]
}
```

#### `schemas/pageIndustries.ts`
```typescript
export default {
  name: 'pageIndustries',
  title: 'Service Page - Industries Section',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Printers', value: 'printers' },
          { title: 'CCTV', value: 'cctv' },
          { title: 'Door Locks', value: 'doorlocks' },
          { title: 'Fire Alarms', value: 'firealarms' }
        ]
      }
    },
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    {
      name: 'industries',
      title: 'Industries',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon Name', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'solutions', title: 'Solutions', type: 'array', of: [{ type: 'string' }] },
          { name: 'image', title: 'Image', type: 'image' }
        ]
      }]
    }
  ]
}
```

#### `schemas/pageFAQs.ts`
```typescript
export default {
  name: 'pageFAQs',
  title: 'Service Page - FAQs Section',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Printers', value: 'printers' },
          { title: 'CCTV', value: 'cctv' },
          { title: 'Door Locks', value: 'doorlocks' },
          { title: 'Fire Alarms', value: 'firealarms' }
        ]
      }
    },
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    {
      name: 'categories',
      title: 'FAQ Categories',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'categoryTitle', title: 'Category Title', type: 'string' },
          {
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'question', title: 'Question', type: 'string' },
                { name: 'answer', title: 'Answer', type: 'text' }
              ]
            }]
          }
        ]
      }]
    },
    { name: 'ctaTitle', title: 'CTA Title', type: 'string' },
    { name: 'ctaDescription', title: 'CTA Description', type: 'text' },
    {
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'text', title: 'Button Text', type: 'string' },
          { name: 'action', title: 'Action', type: 'string' },
          { name: 'variant', title: 'Variant', type: 'string', options: { list: ['primary', 'secondary', 'outline'] } }
        ]
      }]
    }
  ]
}
```

#### `schemas/pageCTA.ts`
```typescript
export default {
  name: 'pageCTA',
  title: 'Service Page - CTA Section',
  type: 'document',
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Printers', value: 'printers' },
          { title: 'CCTV', value: 'cctv' },
          { title: 'Door Locks', value: 'doorlocks' },
          { title: 'Fire Alarms', value: 'firealarms' }
        ]
      }
    },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Text', type: 'string' },
        { name: 'link', title: 'Link', type: 'string' }
      ]
    },
    {
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Text', type: 'string' },
        { name: 'link', title: 'Link', type: 'string' }
      ]
    }
  ]
}
```

#### `schemas/smartFeatures.ts` (CCTV-specific)
```typescript
export default {
  name: 'smartFeatures',
  title: 'Smart Features (CCTV)',
  type: 'document',
  fields: [
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon Name', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' }
        ]
      }]
    }
  ]
}
```

---

### Feedback Page Schemas

#### `schemas/feedbackHero.ts`
```typescript
export default {
  name: 'feedbackHero',
  title: 'Feedback Page Hero',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'rating', title: 'Rating', type: 'number' },
    { name: 'reviewCount', title: 'Review Count', type: 'string' }
  ]
}
```

#### `schemas/feedbackForm.ts`
```typescript
export default {
  name: 'feedbackForm',
  title: 'Feedback Form',
  type: 'document',
  fields: [
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    {
      name: 'formLabels',
      title: 'Form Labels',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name Label', type: 'string' },
        { name: 'location', title: 'Location Label', type: 'string' },
        { name: 'service', title: 'Service Label', type: 'string' },
        { name: 'rating', title: 'Rating Label', type: 'string' },
        { name: 'feedback', title: 'Feedback Label', type: 'string' },
        { name: 'photo', title: 'Photo Label', type: 'string' }
      ]
    },
    { name: 'services', title: 'Service Options', type: 'array', of: [{ type: 'string' }] },
    { name: 'submitButtonText', title: 'Submit Button Text', type: 'string' },
    { name: 'noteText', title: 'Note Text', type: 'text' },
    {
      name: 'googleReviewSection',
      title: 'Google Review Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        { name: 'link', title: 'Google Review Link', type: 'url' }
      ]
    }
  ]
}
```

#### `schemas/feedbackTestimonials.ts`
```typescript
export default {
  name: 'feedbackTestimonials',
  title: 'Feedback Testimonials',
  type: 'document',
  fields: [
    { name: 'sectionTitle', title: 'Section Title', type: 'string' },
    { name: 'sectionDescription', title: 'Section Description', type: 'text' },
    {
      name: 'emptyState',
      title: 'Empty State (when no reviews)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'subDescription', title: 'Sub Description', type: 'text' }
      ]
    },
    { name: 'verifiedBadgeText', title: 'Verified Badge Text', type: 'string' },
    { name: 'bottomText', title: 'Bottom Text', type: 'text' }
  ]
}
```

#### `schemas/feedbackOverview.ts`
```typescript
export default {
  name: 'feedbackOverview',
  title: 'Feedback Overview',
  type: 'document',
  fields: [
    { name: 'ratingTitle', title: 'Rating Title', type: 'string' },
    { name: 'whyLoveUsTitle', title: 'Why Love Us Title', type: 'string' },
    { name: 'overallRating', title: 'Overall Rating', type: 'number' },
    { name: 'reviewCount', title: 'Review Count', type: 'number' },
    {
      name: 'ratingDistribution',
      title: 'Rating Distribution',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'stars', title: 'Stars', type: 'number' },
          { name: 'percentage', title: 'Percentage', type: 'number' },
          { name: 'count', title: 'Count', type: 'number' }
        ]
      }]
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon Name', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' }
        ]
      }]
    }
  ]
}
```

---

### Chat Widget Schema

#### `schemas/chatWidget.ts`
```typescript
export default {
  name: 'chatWidget',
  title: 'Chat Widget',
  type: 'document',
  fields: [
    { name: 'greeting', title: 'Greeting Message', type: 'string' },
    { name: 'companyName', title: 'Company Name', type: 'string' },
    { name: 'onlineStatus', title: 'Online Status Text', type: 'string' },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'whatsapp', title: 'WhatsApp', type: 'string' },
        { name: 'address', title: 'Address', type: 'string' }
      ]
    },
    {
      name: 'mainMenuOptions',
      title: 'Main Menu Options',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'icon', title: 'Icon Name', type: 'string' },
          { name: 'category', title: 'Category', type: 'string' }
        ]
      }]
    },
    { name: 'knowledgeBase', title: 'Knowledge Base (JSON)', type: 'text', description: 'JSON object with FAQ responses' },
    { name: 'footerText', title: 'Footer Text', type: 'string' }
  ]
}
```

---

### Master Index File

#### `schemas/index.ts`
```typescript
import homeHero from './homeHero'
import homeServices from './homeServices'
import about from './about'
import contact from './contact'
import blogsSection from './blogsSection'
import blog from './blog'
import footer from './footer'
import pageHero from './pageHero'
import pageServices from './pageServices'
import pageTypes from './pageTypes'
import pageBrands from './pageBrands'
import pageIndustries from './pageIndustries'
import pageFAQs from './pageFAQs'
import pageCTA from './pageCTA'
import smartFeatures from './smartFeatures'
import feedbackHero from './feedbackHero'
import feedbackForm from './feedbackForm'
import feedbackTestimonials from './feedbackTestimonials'
import feedbackOverview from './feedbackOverview'
import chatWidget from './chatWidget'

export const schemaTypes = [
  // Home page
  homeHero,
  homeServices,
  about,
  contact,
  blogsSection,
  blog,
  
  // Layout
  footer,
  
  // Service pages (shared)
  pageHero,
  pageServices,
  pageTypes,
  pageBrands,
  pageIndustries,
  pageFAQs,
  pageCTA,
  
  // CCTV specific
  smartFeatures,
  
  // Feedback page
  feedbackHero,
  feedbackForm,
  feedbackTestimonials,
  feedbackOverview,
  
  // Chat widget
  chatWidget
]
```

---

## Content Types Overview

| Content Type | Purpose | Pages Used |
|--------------|---------|------------|
| `homeHero` | Home page hero section | Home |
| `homeServices` | Services grid on home | Home |
| `about` | About section | Home |
| `contact` | Contact information | Home, all pages |
| `blogsSection` | Blog section text | Home |
| `blog` | Individual blog posts | Home |
| `footer` | Footer content | All pages |
| `pageHero` | Service page heroes | Printers, CCTV, Door Locks, Fire Alarms |
| `pageServices` | Services listings | Printers, CCTV, Door Locks, Fire Alarms |
| `pageTypes` | Product/service types | Printers, CCTV, Door Locks, Fire Alarms |
| `pageBrands` | Brand partnerships | Printers, CCTV, Door Locks, Fire Alarms |
| `pageIndustries` | Industry solutions | Printers, CCTV, Door Locks, Fire Alarms |
| `pageFAQs` | FAQ sections | Printers, CCTV, Door Locks, Fire Alarms |
| `pageCTA` | Call-to-action sections | Printers, CCTV, Door Locks, Fire Alarms |
| `smartFeatures` | CCTV smart features | CCTV |
| `feedbackHero` | Feedback page hero | Feedback |
| `feedbackForm` | Feedback form config | Feedback |
| `feedbackTestimonials` | Testimonials section | Feedback |
| `feedbackOverview` | Rating overview | Feedback |
| `chatWidget` | Chat widget config | All pages |

---

## Shop Owner Guide

### How to Access the Dashboard

1. Go to your Sanity Studio URL (e.g., `https://itop-services.sanity.studio`)
2. Log in with your email/Google account

### Editing Content by Section

#### Home Page
| What to Edit | Click on |
|--------------|----------|
| Hero banner | "Home Page Hero" |
| Services section | "Home Services Section" |
| About section | "About Section" |
| Contact info | "Contact Information" |
| Blog section | "Blogs Section" |

#### Service Pages (Printers, CCTV, Door Locks, Fire Alarms)
1. Click on the content type (e.g., "Service Page - Services Section")
2. Look for the document where **Page = your service** (e.g., "cctv")
3. Edit and publish

| What to Edit | Click on |
|--------------|----------|
| Page hero/banner | "Service Page Hero" |
| Services list | "Service Page - Services Section" |
| Product types | "Service Page - Types Section" |
| Brands | "Service Page - Brands Section" |
| Industries | "Service Page - Industries Section" |
| FAQs | "Service Page - FAQs Section" |
| CTA section | "Service Page - CTA Section" |

#### Feedback Page
| What to Edit | Click on |
|--------------|----------|
| Page header | "Feedback Page Hero" |
| Form configuration | "Feedback Form" |
| Testimonials section | "Feedback Testimonials" |
| Rating overview | "Feedback Overview" |

#### Global Elements
| What to Edit | Click on |
|--------------|----------|
| Footer | "Footer" |
| Chat widget | "Chat Widget" |

### Icon Reference

Icons use [Lucide React](https://lucide.dev/icons/) names. Common icons:
- **Services**: `Printer`, `Camera`, `Lock`, `Flame`, `Shield`, `Settings`, `Wrench`
- **Contact**: `Phone`, `Mail`, `MapPin`, `Clock`, `MessageCircle`
- **Achievements**: `Star`, `Check`, `Award`, `Users`, `ThumbsUp`
- **Industries**: `Building2`, `School`, `Home`, `Factory`, `Store`, `Hospital`

### Important Notes

- ✅ Changes go live **immediately** after publishing
- ✅ No need to touch any code
- ✅ No need to redeploy the website
- 📝 You can save drafts without publishing
- 🔄 Use "History" to revert to previous versions
- ⚠️ Don't delete documents - edit them instead
- ⚠️ Keep the `page` field values unchanged for service pages

---

## Deploy Sanity Studio

```bash
cd your-sanity-studio-folder
npx sanity deploy
```

Choose a hostname like: `itop-services`
Your studio will be at: `https://itop-services.sanity.studio`

---

## Need Help?

Contact the developer at: sachidanand@live.in
