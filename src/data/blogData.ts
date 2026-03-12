export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: '5-essential-stretches-for-office-workers',
    title: '5 Essential Stretches for Office Workers',
    excerpt: 'Learn simple yet effective stretches to prevent back pain and improve posture during long work hours.',
    content: `
## The Silent Epidemic of Desk-Related Pain

Sitting at a desk for 8+ hours a day has become the norm for millions of workers worldwide. Unfortunately, this sedentary lifestyle takes a significant toll on our bodies. Studies show that **80% of office workers** experience back pain at some point in their careers.

At RestoreFlex Physiotherapy, we see countless patients whose pain originates from poor desk ergonomics and prolonged sitting. The good news? Simple stretches performed throughout the day can dramatically reduce your risk.

## 1. Neck Rolls and Tilts

**Why it works:** Relieves tension in the cervical spine and surrounding muscles.

- Slowly roll your head in a circle, 5 times each direction
- Tilt your head to each side, holding for 15 seconds
- Perform every 2 hours for best results

## 2. Seated Spinal Twist

**Why it works:** Improves thoracic mobility and reduces mid-back stiffness.

- Sit tall in your chair with feet flat on the floor
- Place your right hand on the outside of your left knee
- Gently twist to the left, looking over your shoulder
- Hold for 20 seconds, repeat on both sides

## 3. Chest Opener Stretch

**Why it works:** Counteracts the forward-hunching posture common in desk work.

- Stand in a doorway with arms at 90 degrees
- Step forward until you feel a stretch across your chest
- Hold for 30 seconds, breathe deeply

## 4. Hip Flexor Stretch

**Why it works:** Sitting shortens the hip flexors, which can contribute to lower back pain.

- Stand and step one foot forward into a lunge position
- Keep your back straight and gently push your hips forward
- Hold for 30 seconds per side

## 5. Wrist and Forearm Stretches

**Why it works:** Prevents carpal tunnel syndrome and repetitive strain injuries.

- Extend your arm with palm up, gently pull fingers back
- Hold for 15 seconds, then switch to palm down
- Repeat 3 times on each hand

## Creating a Stretch Routine

We recommend setting a timer to remind yourself to stretch every 90 minutes. Even 2 minutes of stretching can make a significant difference in how you feel at the end of the day.

**Pro tip:** Combine these stretches with a standing desk setup for maximum benefit. Our physiotherapists can also provide a personalized ergonomic assessment of your workspace.

If you're experiencing persistent pain despite regular stretching, it may be time to consult with a professional. Book an appointment at RestoreFlex and let us help you work pain-free.
    `.trim(),
    category: 'workplace',
    author: 'Dr. Arjun Mehta',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['stretching', 'workplace', 'prevention', 'ergonomics'],
    featured: true,
  },
  {
    id: 2,
    slug: 'recovering-from-sports-injuries-complete-guide',
    title: 'Recovering from Sports Injuries: A Complete Guide',
    excerpt: 'Expert tips on how to safely recover from common sports injuries and get back to your game stronger.',
    content: `
## Understanding Sports Injuries

Sports injuries affect athletes of all levels, from weekend warriors to professional competitors. At RestoreFlex, we've helped thousands of athletes return to peak performance through structured rehabilitation programs.

The key to successful recovery lies in understanding the nature of your injury and following a systematic approach to healing.

## Common Sports Injuries We Treat

### ACL Tears
One of the most feared injuries in sports, ACL tears require careful rehabilitation over 6-9 months. Our protocol includes:
- **Phase 1 (Weeks 1-6):** Pain management, range of motion restoration
- **Phase 2 (Weeks 6-12):** Progressive strengthening, proprioception training
- **Phase 3 (Months 3-6):** Sport-specific training, agility work
- **Phase 4 (Months 6-9):** Return-to-sport testing and gradual reintegration

### Rotator Cuff Injuries
Common in overhead sports like cricket, tennis, and swimming. Treatment focuses on:
- Restoring shoulder mechanics
- Strengthening the rotator cuff complex
- Improving scapular stability
- Gradual return to throwing/overhead activities

### Hamstring Strains
These account for nearly 30% of all sports injuries. Our approach:
- Initial RICE protocol (Rest, Ice, Compression, Elevation)
- Progressive eccentric strengthening (Nordic hamstring exercises)
- Running progression program
- Prevention strategies for recurrence

## The PRICE Protocol

For acute injuries in the first 48-72 hours:

1. **P - Protection:** Avoid activities that aggravate the injury
2. **R - Rest:** Allow initial healing to occur
3. **I - Ice:** Apply for 15-20 minutes every 2-3 hours
4. **C - Compression:** Use elastic bandage to reduce swelling
5. **E - Elevation:** Keep the injured area above heart level when possible

## When to See a Physiotherapist

Seek professional help if you experience:
- Pain that persists beyond 48 hours
- Significant swelling or bruising
- Inability to bear weight or use the affected limb
- Joint instability or locking
- Numbness or tingling

## Prevention Is Key

The best injury is one that never happens. Our sports physiotherapy programs include:
- Pre-season screening assessments
- Customized warm-up protocols
- Strength and conditioning guidance
- Movement analysis and correction

At RestoreFlex, we don't just treat injuries — we help you become more resilient and perform better than before. Book a sports injury consultation today.
    `.trim(),
    category: 'sports',
    author: 'Dr. Arjun Mehta',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    date: 'March 10, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['sports', 'recovery', 'injury', 'rehabilitation'],
    featured: true,
  },
  {
    id: 3,
    slug: 'benefits-of-physiotherapy-for-chronic-pain',
    title: 'The Benefits of Physiotherapy for Chronic Pain',
    excerpt: 'Discover how physiotherapy can help manage and reduce chronic pain without medication.',
    content: `
## Living with Chronic Pain

Chronic pain — defined as pain lasting more than 3 months — affects an estimated **1 in 5 adults** worldwide. Unlike acute pain, chronic pain often persists beyond the normal healing time and can significantly impact quality of life.

At RestoreFlex Physiotherapy, we specialize in helping patients break free from the cycle of chronic pain using evidence-based, drug-free approaches.

## How Physiotherapy Addresses Chronic Pain

### Understanding Pain Science
Modern pain science tells us that chronic pain is not simply about tissue damage. The nervous system can become sensitized, amplifying pain signals even after the original injury has healed. Our physiotherapists educate patients about:
- The difference between pain and tissue damage
- Central sensitization and how the brain processes pain
- The role of stress, sleep, and lifestyle in pain perception

### Manual Therapy
Hands-on techniques that can provide immediate relief:
- **Joint mobilization:** Gentle rhythmic movements to restore joint function
- **Soft tissue massage:** Releases muscle tension and trigger points
- **Myofascial release:** Addresses fascial restrictions throughout the body
- **Dry needling:** Targets specific trigger points for deep muscle release

### Therapeutic Exercise
The cornerstone of chronic pain management:
- **Graded exposure:** Gradually increasing activity levels to desensitize the pain response
- **Core stabilization:** Building the deep muscles that support the spine
- **Aerobic conditioning:** Research shows regular cardio exercise reduces pain sensitivity
- **Flexibility training:** Improving range of motion without flaring symptoms

## The Mind-Body Connection

Chronic pain has significant psychological components. Our holistic approach includes:
- **Breathing techniques:** Activates the parasympathetic nervous system
- **Mindfulness strategies:** Reduces pain catastrophizing
- **Pacing education:** Learning to balance activity and rest
- **Goal setting:** Focusing on functional improvements, not just pain levels

## Success Stories

**Case Study: Ravi, 45, Chronic Lower Back Pain**
Ravi had been living with lower back pain for 7 years, taking daily painkillers. After 12 weeks of our chronic pain program:
- Pain reduced from 8/10 to 2/10
- Returned to playing badminton
- Completely stopped pain medication
- Improved sleep quality

**Case Study: Anita, 52, Fibromyalgia**
Diagnosed with fibromyalgia 3 years ago, Anita was struggling with widespread pain and fatigue:
- Completed our 16-week graded exercise program
- Energy levels improved by 60%
- Pain flare-ups reduced from daily to weekly
- Returned to full-time work

## Why Choose Physiotherapy Over Medication?

| Factor | Physiotherapy | Medication |
|--------|-------------|-----------|
| Root cause treatment | Yes | No (symptom management) |
| Side effects | Minimal | Common |
| Long-term effectiveness | Improves over time | May decrease (tolerance) |
| Self-management skills | Yes | No |
| Overall health impact | Positive | Neutral/Negative |

## Getting Started

If you're living with chronic pain, you don't have to suffer in silence. Our chronic pain management program begins with a comprehensive 90-minute assessment where we:
1. Review your complete medical history
2. Perform physical examination
3. Assess movement patterns and functional limitations
4. Discuss your goals and expectations
5. Create a personalized treatment plan

Book your chronic pain consultation at RestoreFlex today and take the first step toward a better quality of life.
    `.trim(),
    category: 'pain-management',
    author: 'Dr. Arjun Mehta',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    date: 'March 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1559839734-65b5c8cbdb09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['chronic pain', 'treatment', 'wellness', 'pain management'],
    featured: false,
  },
  {
    id: 4,
    slug: 'post-surgery-rehabilitation-what-to-expect',
    title: 'Post-Surgery Rehabilitation: What to Expect',
    excerpt: 'A comprehensive guide to post-surgical rehabilitation and recovery timeline.',
    content: 'Recovering from surgery requires a structured approach to rehabilitation.',
    category: 'rehabilitation',
    author: 'Dr. Arjun Mehta',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    date: 'February 28, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['surgery', 'rehabilitation', 'recovery'],
    featured: false,
  },
  {
    id: 5,
    slug: 'pediatric-physiotherapy-helping-children-thrive',
    title: 'Pediatric Physiotherapy: Helping Children Thrive',
    excerpt: 'How physiotherapy can help children with developmental delays and injuries reach their full potential.',
    content: 'Children have unique physiotherapy needs that require specialized approaches.',
    category: 'pediatric',
    author: 'Dr. Arjun Mehta',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    date: 'February 20, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['pediatric', 'children', 'development'],
    featured: false,
  },
  {
    id: 6,
    slug: 'role-of-physiotherapy-in-elderly-care',
    title: 'The Role of Physiotherapy in Elderly Care',
    excerpt: 'Improving mobility and quality of life for seniors through targeted physiotherapy interventions.',
    content: 'As we age, maintaining mobility and independence becomes increasingly important.',
    category: 'geriatric',
    author: 'Dr. Arjun Mehta',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    date: 'February 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6779e38ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['elderly', 'mobility', 'aging'],
    featured: false,
  },
];
