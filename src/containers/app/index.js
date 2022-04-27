import { ContainerComponent } from "./style";

export function Container({ children }){
    return(
        <ContainerComponent>
            {children}
        </ContainerComponent>
    );
}