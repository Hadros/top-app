import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesIcon from "../layout/Menu/icons/courses.svg";
import {TopLevelCategory} from "../interfaces/toppage.interface";
import ServicesIcon from "../layout/Menu/icons/services.svg";
import BooksIcon from "../layout/Menu/icons/books.svg";
import ProductsIcon from "../layout/Menu/icons/products.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
  { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
  { route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];
