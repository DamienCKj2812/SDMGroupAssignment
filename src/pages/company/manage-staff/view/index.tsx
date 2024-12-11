import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Separator, Table } from "@radix-ui/themes";
import "./style.css";
import { IUser } from "../../../../_common/interface";
import { companyUser } from "../../../../_common/data/users-list";
import RemoveUserDialog from "./components/remove-user-dialog";
import FreezeUserDialog from "./components/freeze-user-dialog";
import AddUserDialog from "./components/add-user-dialog";

const ManageStaff = () => {
    const [staffs, setStaffs] = useState<IUser[]>([]);
    const [managers, setManagers] = useState<IUser[]>([]);

    useEffect(() => {
        setStaffs(companyUser.filter((c) => c.role == "staff"));
        setManagers(companyUser.filter((c) => c.role == "manager"));
    }, []);

    return (
        <Flex id="manage-staff" justify="center">
            <Flex maxWidth="900px" flexGrow="1" direction="column" gap="7">
                <Box>
                    <Flex justify="between">
                        <Heading as="h3" mb="3">
                            All Managers ({managers.length})
                        </Heading>
                    </Flex>

                    <Table.Root style={{ width: "100%" }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>User ID</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Email Address</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {managers.map((m) => {
                                return (
                                    <Table.Row key={m.userId}>
                                        <Table.Cell>{m.userId}</Table.Cell>
                                        <Table.Cell>{m.username}</Table.Cell>
                                        <Table.Cell>{m.emailAddress}</Table.Cell>
                                        <Table.Cell>
                                            <Flex gap="4">
                                                <FreezeUserDialog user={m.username}>
                                                    <Button>Freeze</Button>
                                                </FreezeUserDialog>
                                                <RemoveUserDialog user={m.username}>
                                                    <Button color="ruby">Remove</Button>
                                                </RemoveUserDialog>
                                            </Flex>
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table.Root>
                </Box>

                <Separator style={{ width: "100%", background: "gray" }} />

                <Box>
                    <Flex justify="between">
                        <Heading as="h3" mb="3">
                            All Staffs ({staffs.length})
                        </Heading>
                    </Flex>
                    <Table.Root style={{ width: "100%" }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>User ID</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Email Address</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {staffs.map((s) => {
                                return (
                                    <Table.Row key={s.userId}>
                                        <Table.Cell>{s.userId}</Table.Cell>
                                        <Table.Cell>{s.username}</Table.Cell>
                                        <Table.Cell>{s.emailAddress}</Table.Cell>
                                        <Table.Cell>
                                            <Flex gap="4">
                                                <FreezeUserDialog user={s.username}>
                                                    <Button>Freeze</Button>
                                                </FreezeUserDialog>
                                                <RemoveUserDialog user={s.username}>
                                                    <Button color="ruby">Remove</Button>
                                                </RemoveUserDialog>
                                            </Flex>
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table.Root>
                </Box>
                <AddUserDialog>
                    <Button> Create New User</Button>
                </AddUserDialog>
            </Flex>
        </Flex>
    );
};

export default ManageStaff;
