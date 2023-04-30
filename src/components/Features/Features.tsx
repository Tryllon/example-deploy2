import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

//icons
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SearchIcon from '@mui/icons-material/Search';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
}));

export default function FullWidthGrid() {
    return (
        <Container
        >
            <Box sx={{
                padding: '20px 0px'
            }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <Item
                            sx={{
                                height: '100%'
                            }}
                        >
                            <Container>
                                <Box>
                                    <NoteAddIcon
                                        fontSize="large" />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            marginBottom: '20px'
                                        }}
                                        variant="h6"
                                    >
                                        Creating Notes
                                    </Typography>
                                    <Typography
                                        sx={{
                                            maxWidth: '280px'
                                        }}
                                        variant='body1'
                                    >
                                        Without any waiting time, you can easily and quickly create notes
                                    </Typography>
                                </Box>
                            </Container>
                        </Item>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Item
                            sx={{
                                height: '100%'
                            }}
                        >
                            <Container>
                                <Box>
                                    <DeleteIcon fontSize="large" />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            marginBottom: '20px'
                                        }}
                                        variant="h6"
                                    >
                                        Deleting Notes
                                    </Typography>
                                    <Typography
                                        sx={{
                                            maxWidth: '280px'
                                        }}
                                        variant='body1'
                                    >
                                        With one click you can delete your notes
                                    </Typography>
                                </Box>
                            </Container>
                        </Item>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Item
                            sx={{
                                height: '100%'
                            }}
                        >
                            <Container>
                                <Box>
                                    <EditIcon fontSize="large" />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            marginBottom: '20px'
                                        }}
                                        variant="h6"
                                    >
                                        Editing Notes
                                    </Typography>
                                    <Typography
                                        sx={{
                                            maxWidth: '280px'
                                        }}
                                        variant='body1'
                                    >
                                        Multiple editing options for notes, one-click editing of the entire note
                                    </Typography>
                                </Box>
                            </Container>
                        </Item>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Item
                            sx={{
                                height: '100%'
                            }}
                        >
                            <Container>
                                <Box>
                                    <TurnedInNotIcon fontSize="large" />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            marginBottom: '20px'
                                        }}
                                        variant="h6"
                                    >
                                        Organizing Notes With Tags and Folders
                                    </Typography>
                                    <Typography
                                        sx={{
                                            maxWidth: '280px'
                                        }}
                                        variant='body1'
                                    >
                                        You can organise your notes by adding tags and folders
                                    </Typography>
                                </Box>
                            </Container>
                        </Item>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Item
                            sx={{
                                height: '100%'
                            }}
                        >
                            <Container>
                                <Box>
                                    <SearchIcon fontSize="large" />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            marginBottom: '20px'
                                        }}
                                        variant="h6"
                                    >
                                        Searching Notes By Keyword, Folders Or Tag
                                    </Typography>
                                    <Typography
                                        sx={{
                                            maxWidth: '280px'
                                        }}
                                        variant='body1'
                                    >
                                        Ability to search for notes via words, folders and tags
                                    </Typography>
                                </Box>
                            </Container>
                        </Item>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Item
                            sx={{
                                height: '100%'
                            }}
                        >
                            <Container>
                                <Box>
                                    <FolderCopyIcon fontSize="large" />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            marginBottom: '20px'
                                        }}
                                        variant="h6"
                                    >
                                        Organizing Notes Into Folders Or Categories
                                    </Typography>
                                    <Typography
                                        sx={{
                                            maxWidth: '280px'
                                        }}
                                        variant='body1'
                                    >
                                        Arrange your notes into folders and categories
                                    </Typography>
                                </Box>
                            </Container>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}