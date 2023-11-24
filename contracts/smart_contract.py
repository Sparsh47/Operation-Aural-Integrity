import smartpy as sp

@sp.module
def main():
    class Product_creation(sp.Contract):
        def __init__(self):
            # Considering variables
            self.data.productscount = sp.nat(0)
            self.data.id_prod = {}
            self.data.participants = [sp.nat(0)]
            # desc, location, history
            self.data.factory_reg = ""

        @sp.entrypoint
        def add_prod_id(self, x):
            self.data.productscount = x

        @sp.entrypoint
        def add_prod_name(self, q):
            self.data.id_prod[self.data.productscount] = q
            # changable by using len as id itself

        @sp.entrypoint
        def get_val(self, x):
            assert 1 < 2, self.data.id_prod[x]

        """
        @sp.entry_point
        def add_product(self, product_id, description):
            sp.verify(~self.data.id_prod.contains(product_id), "Product already exists.")
            self.data.id_prod[product_id] = {
                'description': description,
                'history': sp.list((sp.now, sp.sender)),
                'locations': sp.list(("Origin", sp.now))
            } 
            code to implement additional feature of premium product history
        """

        """
        @sp.entry_point
        # transfer of product ownership
        def transfer_product(self, product_id, new_owner):
            
            assert self.data.id_prod.contains(product_id), "Product does not exist."    
            assert self.data.id_prod[product_id]['history'] == sp.sender, "You are not the owner of the product." 
            self.data.id_prod[product_id]['history'].append((sp.now, new_owner))
    
            # Update the participants list with the new owner
            if self.data.participants.contains(product_id):
                self.data.participants[product_id] = new_owner
            #self.data.participants[new_owner].append(product_id)
        """

        @sp.entrypoint
        def fact_id(self, x):
            self.data.factory_reg = x
            # self.data.participants.append(x)

        """
        @sp.entry_point
        def update_location(self, product_id, location):
            assert self.data.products.contains(product_id), "Product does not exist."
            assert self.data.products[product_id]['history'] == sp.sender, "You are not the owner of the product."
            self.data.products[product_id]['locations'].append((location, sp.now))
    
        @sp.entry_point
        def perform_quality_check(self, product_id):
            assert self.data.products.contains(product_id), "Product does not exist."
            assert self.data.products[product_id]['history'] == sp.sender, "You are not the owner of the product."
            self.data.products[product_id]['quality_check_passed'] = True

        @sp.entry_point
        @sp.only_owner
        def update_from_external_data(self):
            # Call an off-chain oracle or API to get updated data
            external_data = get_external_data()
            self.data.id_prod = external_data["details"]
            self.data.factory_reg = external_data["manufacturer"]
        """

    #### COMMENTED CODE ARE ADDITIONAL FEATURES TO SUPPORT THE SUPPLY CHAIN FOR LUXURY GOODS
    # AND THIS SUPPLY CHAIN CAN BE MODIFIED OR INCORPORATED/REPLACED WITH PRESENT ONE

@sp.add_test(name="Product_creation")
def test():
    s = sp.test_scenario(main)
    a = main.Product_creation()
    s += a

    a.fact_id(input("Enter manufacturer registeration Number"))
    a.add_prod_id(int(input("Enter prouct id/barcode id")))
    a.add_prod_name(input("Enter product type/name"))

    a.get_val(int(input("Enter the product id to fetch product name")))

    a.fact_id(input("Enter manufacturer registeration Number"))
    a.add_prod_id(int(input("Enter prouct id/barcode id")))
    a.add_prod_name(input("Enter product type/name"))
