"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #444;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  color: ${(props) => (props.active ? "#007bff" : "#fff")};
  text-decoration: none;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
    color: ${(props) => (props.active ? "#007bff" : "#fff")};
  }
`;

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <NavContainer>
      <NavContent>
        <NavList>
          {navItems.map((item) => (
            <NavItem key={item.path}>
              <NavLink href={item.path} active={pathname === item.path}>
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavContent>
    </NavContainer>
  );
}
