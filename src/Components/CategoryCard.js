import { Grid } from '@mui/material';
import React from 'react';

function CategoryCard({ category }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={'auto'}>
      <div className="card" style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
        <h4>{category.heading}</h4>
        <p className='number'>{category.number}</p>
        {category.indication_mail && 
        <p className='indication' style={{margin: "0px"}}><span>INDICATION:</span><span>{category.indication_mail}</span></p>
        }
      </div>
    </Grid>
  );
}

export default CategoryCard;
