import React from 'react'
import Main from '../../../layout/Main'
import PageHeading from '../../../components/PageHeading'
import { List, ListItem } from '../../../components/List'

export default function Checklist() {
    return (
        <Main>

            <PageHeading>
                Residential Checklist
            </PageHeading>

            <List>

                <ListItem>
                    Service
                    <List>
                        <ListItem>Panel (highest breaker at 1.7m above floor)</ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    Arc Fault Breakers Exemptions:
                    <List>
                        <ListItem></ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    Required Dedicated Circuits
                    <List>
                        <ListItem>Laundry Room</ListItem>
                        <ListItem>Utility/Mechanical Room</ListItem>
                        <ListItem>Central Vacuum</ListItem>
                        <ListItem>Electric Vehical</ListItem>
                        <ListItem>Outside Plugs</ListItem>
                        <ListItem>Counter Plugs (max 2 per circuit)</ListItem>
                        <ListItem>Dishwasher</ListItem>
                        <ListItem>Fridge</ListItem>
                        <ListItem>Microwave</ListItem>
                        <ListItem>Garburator</ListItem>
                        <ListItem>Carport/Garage (including lights)</ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    Receptacles (Not all required by code)
                    <List>
                        <ListItem>General use (Bedrooms, Hallways, Living Spaces)</ListItem>
                        <ListItem>Wifi router</ListItem>
                        <ListItem>Television</ListItem>
                        <ListItem>Laundry room</ListItem>
                        <ListItem>Utility/Mechanical room</ListItem>
                        <ListItem>Central vacuum</ListItem>
                        <ListItem>Electric vehical</ListItem>
                        <ListItem>Outside plugs</ListItem>
                        <ListItem>Counter plugs (GFCI, 20A, 2 per circuit, minimum 2 circuits if practicable)</ListItem>
                        <ListItem>Island/Peninsula plugs</ListItem>
                        <ListItem>Dishwasher (GFCI if plugged in)</ListItem>
                        <ListItem>Fridge</ListItem>
                        <ListItem>Microwave</ListItem>
                        <ListItem>Range plug</ListItem>
                        <ListItem>Range hood fan</ListItem>
                        <ListItem>Garburator</ListItem>
                        <ListItem>Washing machine</ListItem>
                        <ListItem>Unfinished basement</ListItem>
                        <ListItem>Washroom (Within 0.5m - 1m of sink, GFCI protected)</ListItem>
                        <ListItem>Balcony/Porch (1 required in each)</ListItem>
                        <ListItem>Carport/Garage</ListItem>
                        <ListItem>Garage door opener</ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    Lighting
                    <List>
                        <ListItem>Under-cabinet lighting</ListItem>
                        <ListItem>Closet light</ListItem>
                        <ListItem>Attic light</ListItem>
                        <ListItem>Crawlspace light</ListItem>
                    </List>
                </ListItem>

                <ListItem>
                    Other
                    <List>
                        <ListItem>Booster fan for dryer vent</ListItem>
                        <ListItem>Remote timer for washroom fan</ListItem>
                        <ListItem>Timer for washroom fan</ListItem>
                        <ListItem>Tel/Data drops</ListItem>
                        <ListItem>Smoke detectors</ListItem>
                        <ListItem>CO2 dectectors</ListItem>
                        <ListItem>Sprinkler alarm relay</ListItem>
                        <ListItem>HVAC, HVAC controls, baseboard heaters</ListItem>
                    </List>
                </ListItem>

            </List>

        </Main>
    )
}


