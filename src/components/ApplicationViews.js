import React from "react"
import { Route } from "react-router-dom"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeProvider } from "./products/ProductTypeProvider"

export const ApplicationViews = () => (
    <>
        <Route exact path ="/">
            
        </Route>
        <LocationProvider>
            <Route path ="/locations">
                <LocationList />
            </Route>
        </LocationProvider>

        <ProductTypeProvider>
            <ProductProvider>
                <Route path ="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
        </ProductTypeProvider>

        <EmployeeProvider>
            <LocationProvider>
                <Route exact path ="/employees">
                    <EmployeeList />
                </Route>
                <Route path="/employees/create">
                    <EmployeeForm />
                </Route>
            </LocationProvider>
        </EmployeeProvider>

        <Route path ="/customers">
            {/* <CustomerList /> */}
        </Route>
    </>
)