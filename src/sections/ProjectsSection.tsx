import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Stack,
  Button,
  Divider,
  useTheme,
  Paper,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import { SectionHeader } from '../components/SectionHeader';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { ReactHighlightWithinDemo } from '../components/ReactHighlightWithinDemo';
import { projectsData } from '../data/projects';

export const ProjectsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        backgroundColor: theme.palette.mode === 'dark' ? '#070a12' : '#ffffff',
      }}
    >
      <SectionHeader
        badge="Case Studies"
        title="Featured Projects"
        subtitle="Key technical projects spanning cybersecurity products, real-time applications, open-source packages, and operational tools."
      />

      <Stack spacing={4}>
        {projectsData.map((project, index) => (
          <Card
            key={project.id}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.divider,
            }}
          >
            <CardContent sx={{ p: { xs: 3, sm: 4, md: 4 } }}>
              {/* Header Title Row */}
              <Box sx={{ mb: 2 }}>
                <Stack direction="row" spacing={1} sx={{ gap: 1, mb: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace", color: theme.palette.primary.main, fontWeight: 700 }}>
                    CASE STUDY 0{index + 1}
                  </Typography>
                  {project.status && (
                    <Chip label={project.status} size="small" color="secondary" variant="outlined" sx={{ fontWeight: 600 }} />
                  )}
                </Stack>

                <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '1.45rem', sm: '1.75rem', md: '1.95rem' }, fontWeight: 800, mb: 0.5 }}>
                  {project.title}
                </Typography>

                <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main, fontWeight: 600, fontSize: '0.95rem' }}>
                  {project.subtitle}
                </Typography>
              </Box>

              <Divider sx={{ mb: 2.5 }} />

              <Grid container spacing={3}>
                {/* Context, Role & Action Column */}
                <Grid size={{ xs: 12, lg: project.media || project.hasInteractiveDemo ? 7 : 12 }}>
                  {/* What the Project Does & Done */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 0.5 }}>
                      What it Does &amp; Done:
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2, lineHeight: 1.7 }}>
                      {project.context}
                    </Typography>
                  </Box>

                  {/* My Role */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 0.5 }}>
                      My Role:
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontWeight: 600, mb: 2 }}>
                      {project.role}
                    </Typography>
                  </Box>

                  {/* Code Snippet if present */}
                  {project.codeSnippet && (
                    <Paper
                      variant="outlined"
                      sx={{
                        p: 1.5,
                        mb: 2.5,
                        backgroundColor: theme.palette.mode === 'dark' ? '#0b0f19' : '#1e293b',
                        borderColor: theme.palette.divider,
                        color: '#f8fafc',
                        fontFamily: "'JetBrains Mono', monospace",
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <TerminalIcon sx={{ color: theme.palette.primary.main }} />
                      <Typography variant="body2" sx={{ fontFamily: 'inherit', color: '#f8fafc' }}>
                        {project.codeSnippet}
                      </Typography>
                    </Paper>
                  )}

                  {/* Tech Stack */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', mb: 1, color: theme.palette.text.secondary }}>
                      Tech Stack:
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ gap: 0.8, flexWrap: 'wrap' }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f1f5f9',
                            color: theme.palette.text.primary,
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            border: `1px solid ${theme.palette.divider}`,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  {/* Links & Calls to Action */}
                  {project.links && project.links.length > 0 && (
                    <Stack direction="row" spacing={2} sx={{ gap: 1.5, flexWrap: 'wrap' }}>
                      {project.links.map((link) => (
                        <Button
                          key={link.label}
                          variant={link.isPrimary ? 'contained' : 'outlined'}
                          color="primary"
                          size="small"
                          component="a"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          endIcon={link.url.includes('github') ? <CodeIcon /> : <LaunchIcon />}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </Stack>
                  )}
                </Grid>

                {/* Media & Interactive Demo Column */}
                {(project.media || project.hasInteractiveDemo) && (
                  <Grid size={{ xs: 12, lg: 5 }}>
                    <Stack spacing={2.5}>
                      {project.media?.map((m, mIdx) => (
                        <MediaPlaceholder
                          key={mIdx}
                          type={m.type}
                          src={m.src}
                          alt={m.alt}
                          caption={m.caption}
                          height={220}
                        />
                      ))}

                      {project.hasInteractiveDemo && <ReactHighlightWithinDemo />}
                    </Stack>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
