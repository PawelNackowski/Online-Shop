import { Link, ListContainer, ListItem } from "./styled"

export const Navigation = () => {
    return (
        <nav>
            <ListContainer>
                <ListItem>
                    <Link href="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link href="/products">Products</Link>
                </ListItem>
                <ListItem>
                    <Link href="/about">About Us</Link>
                </ListItem>
                <ListItem>
                    <Link href="/contact">Contact</Link>
                </ListItem>
            </ListContainer>
        </nav>
    )
}