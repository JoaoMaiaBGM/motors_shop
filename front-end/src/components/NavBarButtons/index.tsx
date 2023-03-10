import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";

export const NavBarButtons = () => {
  return (
    <Breadcrumb zIndex={2} separator="" spacing="22px">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Carros</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Motos</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Leilão</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem></BreadcrumbItem>
    </Breadcrumb>
  );
};
