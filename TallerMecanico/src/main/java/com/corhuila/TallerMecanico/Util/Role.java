package com.corhuila.TallerMecanico.Util;

import java.util.Arrays;
import java.util.List;

public enum Role {

    CUSTOMER(Arrays.asList(Permission.READ_ALL_VEHICLES, Permission.READ_BY_PLATE_VEHICLES, Permission.SAVE_ONE_VEHICLE,
            Permission.UPDATE_ONE_VEHICLE,
            Permission.SAVE_ONE_ORDER, Permission.UPDATE_ONE_ORDER, Permission.SAVE_ONE_PERSON,
            Permission.UPDATE_ONE_PERSON,
            Permission.SAVE_ONE_SERVICE, Permission.UPDATE_ONE_SERVICE, Permission.SAVE_ONE_INVENTORY,
            Permission.UPDATE_ONE_INVENTORY)),

    ADMINISTRATOR(
            Arrays.asList(Permission.READ_ALL_VEHICLES, Permission.READ_BY_PLATE_VEHICLES, Permission.SAVE_ONE_VEHICLE,
                    Permission.UPDATE_ONE_VEHICLE,
                    Permission.DELETE_ONE_VEHICLE, Permission.SAVE_ONE_ORDER, Permission.UPDATE_ONE_ORDER,
                    Permission.DELETE_ONE_ORDER,
                    Permission.SAVE_ONE_PERSON, Permission.UPDATE_ONE_PERSON, Permission.DELETE_ONE_PERSON,
                    Permission.SAVE_ONE_SERVICE,
                    Permission.UPDATE_ONE_SERVICE, Permission.DELETE_ONE_SERVICE, Permission.SAVE_ONE_INVENTORY,
                    Permission.UPDATE_ONE_INVENTORY,
                    Permission.DELETE_ONE_INVENTORY));

    private List<Permission> permissions;

    Role(List<Permission> permissions) {
        this.permissions = permissions;
    }

    public List<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<Permission> permissions) {
        this.permissions = permissions;
    }
}
