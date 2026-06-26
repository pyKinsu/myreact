import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Increment = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
        Increment and Decrement Operators in C
      </Typography>

      <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
        C provides two special operators, <code>++</code> (increment) and <code>--</code> (decrement),
        that increase or decrease the value of a variable by exactly 1. They are a shorthand for writing
        <code> a = a + 1</code> or <code>a = a - 1</code>.
      </Typography>

      <Box
        component="pre"
        sx={{
          backgroundColor: 'rgba(29, 77, 7, 0.23)',
          p: 2,
          borderRadius: 1,
          fontFamily: 'monospace',
          mb: 3,
          overflowX: 'auto',
        }}
      >
{`int a = 5;
a++;   // same as a = a + 1, now a = 6
a--;   // same as a = a - 1, now a = 5`}
      </Box>

      <Typography variant="h6" gutterBottom color="primary">
        Pre vs Post Increment/Decrement
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        These operators can be used in two ways, and the position of <code>++</code> or <code>--</code>{' '}
        changes <strong>when</strong> the value is updated relative to the rest of the expression:
      </Typography>

      <TableContainer component={Paper} sx={{ overflowX: 'auto', mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Form</strong></TableCell>
              <TableCell><strong>Example</strong></TableCell>
              <TableCell><strong>Behaviour</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Pre-increment</TableCell>
              <TableCell><code>++a</code></TableCell>
              <TableCell>Value is increased <strong>first</strong>, then used in the expression</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Post-increment</TableCell>
              <TableCell><code>a++</code></TableCell>
              <TableCell>Current value is used <strong>first</strong>, then increased</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pre-decrement</TableCell>
              <TableCell><code>--a</code></TableCell>
              <TableCell>Value is decreased <strong>first</strong>, then used in the expression</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Post-decrement</TableCell>
              <TableCell><code>a--</code></TableCell>
              <TableCell>Current value is used <strong>first</strong>, then decreased</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" gutterBottom color="primary">
        Example: Pre vs Post Increment
      </Typography>

      <Box
        component="pre"
        sx={{
          backgroundColor: 'rgba(29, 77, 7, 0.23)',
          p: 2,
          borderRadius: 1,
          fontFamily: 'monospace',
          mb: 2,
          overflowX: 'auto',
        }}
      >
{`#include<stdio.h>
int main()
{
    int a = 5;
    printf("Post-increment: %d\\n", a++); // prints 5, then a becomes 6
    printf("Value of a now: %d\\n", a);    // prints 6

    int b = 5;
    printf("Pre-increment: %d\\n", ++b);  // b becomes 6, then prints 6
    printf("Value of b now: %d\\n", b);    // prints 6

    return 0;
}`}
      </Box>

      <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 4 }}>
        Output:<br />
        Post-increment: 5<br />
        Value of a now: 6<br />
        Pre-increment: 6<br />
        Value of b now: 6
      </Typography>

      <Typography variant="h6" gutterBottom color="primary">
        Why does the position matter?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        • Use <code>a++</code> when you want to use the variable's <strong>current</strong> value in an
        expression, and only update it afterwards.<br />
        • Use <code>++a</code> when you want the variable to be updated <strong>before</strong> it's used
        in the same line.<br />
        • If the increment/decrement is on its own line (e.g. <code>a++;</code> by itself), pre and post
        forms behave identically — the difference only matters when the result is used immediately,
        like inside a <code>printf</code>, an assignment, or a loop condition.
      </Typography>

      <Typography variant="h6" gutterBottom color="primary">
        Common Use Case: Loops
      </Typography>
      <Box
        component="pre"
        sx={{
          backgroundColor: 'rgba(29, 77, 7, 0.23)',
          p: 2,
          borderRadius: 1,
          fontFamily: 'monospace',
          mb: 2,
          overflowX: 'auto',
        }}
      >
{`for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}
// Output: 0 1 2 3 4`}
      </Box>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The <code>i++</code> here increases the loop counter by 1 after every iteration — this is the
        most common place you'll see increment/decrement operators used in real programs.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2, mt: 5 }}>
        <Button variant="outlined" onClick={() => navigate('/learnc/bitwise')}>
          Back
        </Button>
        <Button variant="contained" onClick={() => navigate('/learnc/controlstructure')}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Increment;
