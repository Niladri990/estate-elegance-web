
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BadgeIndianRupee } from 'lucide-react';

const AddListing = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later with Supabase integration
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-estate-primary text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Add New Property</h1>
            <p className="text-xl max-w-3xl">
              List your property and reach thousands of potential buyers and renters.
            </p>
          </div>
        </div>

        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Property Title</Label>
                  <Input id="title" placeholder="Enter property title" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Property Type</Label>
                    <select id="type" className="w-full border-gray-200 rounded-md" required>
                      <option value="">Select Type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="House">House</option>
                      <option value="Villa">Villa</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="status">Status</Label>
                    <select id="status" className="w-full border-gray-200 rounded-md" required>
                      <option value="">Select Status</option>
                      <option value="For Sale">For Sale</option>
                      <option value="For Rent">For Rent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="price">Price (₹)</Label>
                  <div className="relative">
                    <BadgeIndianRupee className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input id="price" type="number" className="pl-10" placeholder="Enter price" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Input id="bedrooms" type="number" min="0" required />
                  </div>
                  <div>
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Input id="bathrooms" type="number" min="0" required />
                  </div>
                  <div>
                    <Label htmlFor="area">Area (sq ft)</Label>
                    <Input id="area" type="number" min="0" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Enter complete address" required />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    className="w-full border-gray-200 rounded-md min-h-[150px]"
                    placeholder="Describe your property"
                    required
                  ></textarea>
                </div>

                <div>
                  <Label htmlFor="images">Property Images</Label>
                  <Input id="images" type="file" multiple accept="image/*" className="cursor-pointer" required />
                  <p className="text-sm text-gray-500 mt-1">You can upload multiple images</p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-estate-primary hover:bg-estate-secondary">
                Submit Listing
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AddListing;
