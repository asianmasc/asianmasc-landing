# AsianMasc Landing Page

Landing page for the AsianMasc Discord community - a brotherhood of 182K+ Asian men leveling up together.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Static export via Docker + Nginx

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npx serve out
```

## Deployment

### Docker Build

```bash
# Build image
docker build -t asianmasc-landing .

# Run locally
docker run -p 3000:80 asianmasc-landing
```

### Production Deployment

This project uses GitHub Actions for CI/CD:

1. Push to `main` branch triggers a build
2. Docker image is pushed to `dddd4444/asianmasc-landing`
3. Watchtower on the apps server auto-pulls the new image

### Server Setup (Dockge)

Copy `docker-compose.yml` to the apps server at `/opt/stacks/asianmasc-landing/`:

```bash
scp docker-compose.yml root@178.156.215.131:/opt/stacks/asianmasc-landing/
```

Then start via Dockge or:

```bash
cd /opt/stacks/asianmasc-landing && docker compose up -d
```

### Required GitHub Secrets

- `DOCKERHUB_USERNAME`: Docker Hub username
- `DOCKERHUB_TOKEN`: Docker Hub access token

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles + Tailwind config
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Landing page
└── components/
    ├── Hero.tsx        # Hero section with CTA
    ├── Problem.tsx     # Problem/Solution framing
    ├── Pillars.tsx     # Community pillars (fitness, dating, etc.)
    ├── Stats.tsx       # Community statistics
    ├── Testimonials.tsx# Member testimonials
    ├── FinalCTA.tsx    # Final call-to-action
    └── Footer.tsx      # Footer
```

## Design

- **Theme:** Dark mode with red/gold accents
- **Colors:** 
  - Background: `#0a0a0a` (dark-900)
  - Accent Gold: `#D4AF37`
  - Accent Red: `#DC2626`
- **Font:** Inter

## License

Private - AsianMasc Community
