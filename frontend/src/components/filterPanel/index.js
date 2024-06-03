import React from "react";
import { Form, Col, Card } from "react-bootstrap";

const FilterPanel = ({ handleFilterChange }) => {
  const categories = [
    "Content Distribution",
    "Ads",
    "Twitter Influencer",
    "Telegram Influencer",
    "YouTube Influencers",
    "Instagram Influencers",
    "IOC Listing",
    "Exchange Listing",
  ];
  const languages = [
    "English",
    "Spanish",
    "Chinese",
    "French",
    "German",
    "Japanese",
    "Korean",
    "Russian",
    "Arabic",
    "Portuguese",
    "Italian",
    "Hindi",
  ];
  const regions = [
    "USA",
    "Spain",
    "China",
    "UK",
    "France",
    "Germany",
    "Japan",
    "South Korea",
    "Russia",
    "Canada",
    "UAE",
    "Australia",
    "Mexico",
    "Brazil",
    "India",
    "Italy",
    "Singapore",
  ];
  const productTypes = ["Gambling", "Adult", "Web 3.0"];

  return (
    <Card className="mb-4 ">
      <Card.Body>
        <h4 className="mb-3">Filter Panel</h4>
        <Form>
          <Form.Group as={Col}>
            <Card>
              <Card.Body>
                <Form.Label className="font-weight-bold">Categories</Form.Label>
                {categories.map((category, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    label={category}
                    id={`category-${index}`}
                    onChange={(e) =>
                      handleFilterChange("category", category, e.target.checked)
                    }
                    className="mb-2"
                  />
                ))}
              </Card.Body>
            </Card>
          </Form.Group>
          <Form.Group as={Col}>
            <Card>
              <Card.Body>
                <Form.Label className="font-weight-bold ">Languages</Form.Label>
                {languages.map((language, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    label={language}
                    id={`language-${index}`}
                    onChange={(e) =>
                      handleFilterChange("language", language, e.target.checked)
                    }
                    className="mb-2"
                  />
                ))}
              </Card.Body>
            </Card>
          </Form.Group>
          <Form.Group as={Col}>
            <Card>
              <Card.Body>
                <Form.Label className="font-weight-bold">Regions</Form.Label>
                {regions.map((region, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    label={region}
                    id={`region-${index}`}
                    onChange={(e) =>
                      handleFilterChange("region", region, e.target.checked)
                    }
                    className="mb-2"
                  />
                ))}
              </Card.Body>
            </Card>
          </Form.Group>
          <Form.Group as={Col}>
            <Card>
              <Card.Body>
                <Form.Label className="font-weight-bold">
                  Product Types
                </Form.Label>
                {productTypes.map((type, index) => (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    label={type}
                    id={`type-${index}`}
                    onChange={(e) =>
                      handleFilterChange("productType", type, e.target.checked)
                    }
                    className="mb-2"
                  />
                ))}
              </Card.Body>
            </Card>
          </Form.Group>
          <Form.Group as={Col}>
            <Card>
              <Card.Body>
                <Form.Label className="font-weight-bold">
                  Budget Range
                </Form.Label>
                <Form.Label>Range</Form.Label>
                <Form.Range />
              </Card.Body>
            </Card>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FilterPanel;
