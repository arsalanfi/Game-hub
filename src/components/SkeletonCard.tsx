import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const SkeletonCard = () => {
  return (
    <Card.Root>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
};

export default SkeletonCard;
