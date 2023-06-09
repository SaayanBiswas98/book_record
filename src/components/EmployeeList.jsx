import { EmployeeItem } from './EmployeeItem';
import { useEffect, useState } from 'react';
import { getListEmployees } from '../service/localstorage';
import './Employee.css';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Manage Book details</h1>

            {
                employees.length > 0 ? (
                    <div className="card bg-secondary p-3 overflow-x-auto col-12 mobile">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col-2">Book name</th>
                                    <th scope="col-2">Author</th>
                                    <th scope="col-2">ISBN NUMBER</th>
                                    <th scope="col-2">Year Published</th>
                                    <th scope="col-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No Books</h3>
                )
            }

        </div>
    )
}
