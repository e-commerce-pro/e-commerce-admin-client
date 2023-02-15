import { Colxx, Separator } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Button, Card, CardBody, Row, Table } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function Product() {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAddProduct = () => {
    history.push(`/app/applications/addProduct`);
  };
  const handleEditProduct = () => {
    history.push(`/app/applications/editProduct`);
  };
  const handleViewProduct = () => {
    history.push(`/app/applications/viewProduct`);
  };
  const userAddressData = [
    {
      id: 1,
      productName: 'Hp Lpatop',
      Category: 'Laptop',
      mrp: '65000',
      price: '55000',
      unit: 'gm',
      value: '990',
      symbol: '/assets/img/products/veg-icon.svg',
      img: '/assets/img/products/gym1.jpg',
    },
    {
      id: 1,
      productName: 'Hp Lpatop',
      Category: 'Laptop',
      mrp: '65000',
      price: '55000',
      unit: 'gm',
      value: '990',
      symbol: '/assets/img/products/non-veg-icon.svg',
      img: '/assets/img/products/gym2.jpg',
    },
    {
      id: 1,
      productName: 'Hp Lpatop',
      Category: 'Laptop',
      mrp: '65000',
      price: '55000',
      unit: 'gm',
      value: '990',
      symbol: '/assets/img/products/veg-icon.svg',
      img: '/assets/img/products/gym3.jpg',
    },
  ];
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <div className="d-flex justify-content-between mb-4">
            <h1>Product</h1>
            <Button
              size="sm"
              color="primary"
              outline
              onClick={handleAddProduct}
            >
              <IntlMessages id="+ Add Product" />
            </Button>
          </div>
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Colxx xxs="12">
        <Card className="mb-4" style={{ borderRadius: '0.75rem' }}>
          <CardBody style={{ overflow: 'auto' }}>
            <Table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>MRP / Price</th>
                  <th>Unit & Value</th>
                  <th>Symbol</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userAddressData.map((data) => (
                  <tr key={data.id}>
                    <td>
                      <img
                        alt="Thumbnail"
                        src={data.img}
                        className="list-thumbnail responsive border-0 card-img-left"
                      />
                    </td>
                    <td>{data.productName}</td>
                    <td>{data.Category}</td>
                    <td>
                      {data.mrp}/{data.price}
                    </td>
                    <td>
                      {data.unit}/{data.value}
                    </td>
                    <td>
                      <img
                        src={data.symbol}
                        alt="Chitr - Veg Symbol - Svg - Veg And Non Veg Icons@pngkey.com"
                        style={{ height: '30px', width: '30px' }}
                      />
                    </td>
                    <td>
                      <i
                        style={{ cursor: 'pointer' }}
                        className="simple-icon-options-vertical"
                        onClick={(e) => handleClick(e)}
                        onKeyDown={(e) => handleClick(e)}
                        aria-hidden="true"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  mt: 1.5,
                  border: '1px solid',
                  borderColor: 'rgba(58,58,58,.15)',
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleEditProduct}>
                <i
                  className="iconsminds-file-edit"
                  style={{ color: '#6fb327', marginRight: '5px' }}
                />
                Edit
              </MenuItem>
              <MenuItem onClick={handleViewProduct}>
                <i
                  className="simple-icon-eye"
                  style={{ color: '#6fb327', marginRight: '5px' }}
                />
                <span style={{ marginLeft: '5px' }}>View</span>
              </MenuItem>
              <MenuItem>
                <i
                  className="iconsminds-delete-file"
                  style={{ color: '#6fb327', marginRight: '5px' }}
                />
                Delete
              </MenuItem>
            </Menu>
          </CardBody>
        </Card>
      </Colxx>
    </>
  );
}

export default Product;
